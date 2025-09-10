import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
// FIX: Refactored Firebase v9 imports to v8 syntax.
// import { ref, onValue, set, push, update, remove } from 'firebase/database';
import type { Course } from '../../types';

const CoursesManager: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCourse, setEditingCourse] = useState<Course | null>(null);

    useEffect(() => {
        // FIX: Refactored Firebase database listener from v9 to v8 syntax and added cleanup.
        const coursesRef = db.ref('courses');
        const listener = coursesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            const coursesList: Course[] = data ? Object.keys(data).map(key => ({ ...data[key], id: key })) : [];
            setCourses(coursesList);
        });

        return () => {
            coursesRef.off('value', listener);
        };
    }, []);

    const handleOpenModal = (course: Course | null = null) => {
        setEditingCourse(course);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingCourse(null);
    };

    const handleSave = (courseToSave: Course) => {
        // FIX: Refactored Firebase write operations from v9 to v8 syntax.
        if (courseToSave.id) {
            // Update existing course
            const { id, ...courseData } = courseToSave;
            db.ref(`courses/${id}`).update(courseData);
        } else {
            // Add new course
            const { id, ...courseData } = courseToSave; // id is empty string here, so we discard it
            db.ref('courses').push(courseData);
        }
        handleCloseModal();
    };

    const handleDelete = (id: string) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer cette formation ?')) {
            // FIX: Refactored Firebase delete operation from v9 to v8 syntax.
            db.ref(`courses/${id}`).remove();
        }
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-serif text-brand-dark">Gérer les Formations</h1>
                <button onClick={() => handleOpenModal()} className="px-4 py-2 bg-brand-dark text-white font-bold rounded-md hover:bg-brand-burgundy transition-colors">
                    + Ajouter une Formation
                </button>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-md overflow-x-auto">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-4">Titre</th>
                            <th className="p-4">Durée</th>
                            <th className="p-4">Admission</th>
                            <th className="p-4">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <tr key={course.id} className="border-b hover:bg-gray-50">
                                <td className="p-4">{course.title}</td>
                                <td className="p-4">{course.duration}</td>
                                <td className="p-4">{course.admission}</td>
                                <td className="p-4 whitespace-nowrap">
                                    <button onClick={() => handleOpenModal(course)} className="text-blue-600 hover:underline">Modifier</button>
                                    <button onClick={() => handleDelete(course.id)} className="ml-4 text-red-600 hover:underline">Supprimer</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {isModalOpen && <CourseModal course={editingCourse} onSave={handleSave} onClose={handleCloseModal} />}
        </div>
    );
};

const CourseModal: React.FC<{ course: Course | null, onSave: (course: Course) => void, onClose: () => void }> = ({ course, onSave, onClose }) => {
    const [formData, setFormData] = useState<Course>(course || { id: '', title: '', description: '', duration: '', admission: '', imageUrl: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-serif text-brand-dark mb-6">{course ? 'Modifier la Formation' : 'Ajouter une Formation'}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <InputField name="title" label="Titre" value={formData.title} onChange={handleChange} required />
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea name="description" value={formData.description} onChange={handleChange} rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-burgundy focus:border-brand-burgundy" required></textarea>
                    </div>
                    <InputField name="duration" label="Durée" value={formData.duration} onChange={handleChange} required />
                    <InputField name="admission" label="Niveau d'Admission" value={formData.admission} onChange={handleChange} required />
                    <InputField name="imageUrl" label="URL de l'Image" value={formData.imageUrl} onChange={handleChange} required />
                    <div className="flex justify-end pt-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md mr-2 hover:bg-gray-300">Annuler</button>
                        <button type="submit" className="px-4 py-2 bg-brand-dark text-white font-bold rounded-md hover:bg-brand-burgundy">Enregistrer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const InputField: React.FC<{ name: string; label: string; value: string; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; required?: boolean }> = ({ name, label, value, onChange, required }) => (
    <div>
        <label className="block text-sm font-medium text-gray-700">{label}</label>
        <input type="text" name={name} value={value} onChange={onChange} required={required} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-brand-burgundy focus:border-brand-burgundy" />
    </div>
);

export default CoursesManager;