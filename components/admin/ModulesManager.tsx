import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';
// FIX: Refactored Firebase v9 imports to v8 syntax.
// import { ref, onValue, update } from 'firebase/database';
import type { Course, Chapter } from '../../types';

const ClassroomManager: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCourse, setEditingCourse] = useState<Course | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // FIX: Refactored Firebase database listener from v9 to v8 syntax and added cleanup.
        const coursesRef = db.ref('courses');
        const listener = coursesRef.on('value', (snapshot) => {
            const data = snapshot.val();
            const coursesList: Course[] = data ? Object.keys(data).map(key => ({ ...data[key], id: key })) : [];
            setCourses(coursesList);
            setLoading(false);
        });

        return () => {
            coursesRef.off('value', listener);
        };
    }, []);

    const handleOpenModal = (course: Course) => {
        setEditingCourse(course);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setEditingCourse(null);
    };

    const handleSave = (courseToSave: Course) => {
        // FIX: Refactored Firebase update operation from v9 to v8 syntax.
        const { id, ...courseData } = courseToSave;
        db.ref(`courses/${id}`).update(courseData);
        handleCloseModal();
    };

    if (loading) {
        return <h1 className="text-3xl font-serif text-brand-dark">Chargement des formations...</h1>;
    }

    return (
        <div>
            <h1 className="text-3xl font-serif text-brand-dark mb-6">Gérer la Classroom</h1>

            <div className="bg-white p-4 rounded-lg shadow-md">
                 <div className="space-y-4">
                    {courses.map(course => (
                        <div key={course.id} className="flex justify-between items-center p-3 border-b last:border-b-0">
                            <div>
                                <h2 className="text-xl font-serif text-brand-burgundy">{course.title}</h2>
                                <p className="text-gray-600 text-sm">{(course.chapters || []).length} / 20 chapitres</p>
                            </div>
                            <button onClick={() => handleOpenModal(course)} className="px-4 py-2 bg-brand-dark text-white font-bold rounded-md hover:bg-brand-burgundy transition-colors text-sm">
                                Gérer les chapitres
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {isModalOpen && editingCourse && <ClassroomModal course={editingCourse} onSave={handleSave} onClose={handleCloseModal} />}
        </div>
    );
};

const ClassroomModal: React.FC<{ course: Course, onSave: (course: Course) => void, onClose: () => void }> = ({ course, onSave, onClose }) => {
    const [formData, setFormData] = useState<Course>(course);

    const handleChapterChange = (index: number, field: keyof Omit<Chapter, 'id'>, value: string) => {
        const newChapters = [...(formData.chapters || [])];
        // FIX: Replaced empty object fallback `{}` with a default object that satisfies the Chapter type.
        const currentChapter = newChapters[index] || { id: '', title: '', content: '' };
        newChapters[index] = { ...currentChapter, [field]: value };
        if (!newChapters[index].id) {
             newChapters[index].id = Date.now().toString() + index;
        }
        setFormData(prev => ({ ...prev, chapters: newChapters }));
    };

    const addChapter = () => {
        if (formData.chapters && formData.chapters.length >= 20) {
            alert("Vous ne pouvez pas ajouter plus de 20 chapitres.");
            return;
        }
        const newChapter: Chapter = { id: Date.now().toString(), title: '', content: '', videoUrl: '' };
        setFormData(prev => ({ ...prev, chapters: [...(prev.chapters || []), newChapter] }));
    };

    const removeChapter = (index: number) => {
        setFormData(prev => ({ ...prev, chapters: (prev.chapters || []).filter((_, i) => i !== index) }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                <h2 className="text-2xl font-serif text-brand-dark mb-2">Modifier les chapitres pour :</h2>
                <h3 className="text-xl font-serif text-brand-burgundy mb-6">{formData.title}</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-xl font-serif text-brand-burgundy pt-4 border-t">Chapitres ({(formData.chapters || []).length}/20)</h3>
                    <div className="space-y-4">
                        {(formData.chapters || []).map((chapter, index) => (
                            <div key={chapter.id || index} className="p-4 border rounded-md relative bg-gray-50">
                                <button type="button" onClick={() => removeChapter(index)} className="absolute top-2 right-2 text-red-500 hover:text-red-700 font-bold text-xl">&times;</button>
                                <h4 className="font-bold mb-2 text-gray-800">Chapitre {index + 1}</h4>
                                <input type="text" placeholder="Titre du chapitre" value={chapter.title} onChange={(e) => handleChapterChange(index, 'title', e.target.value)} required className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
                                <textarea placeholder="Contenu du chapitre" value={chapter.content} onChange={(e) => handleChapterChange(index, 'content', e.target.value)} required rows={4} className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
                                <input type="text" placeholder="URL de la vidéo (optionnel, ex: https://www.youtube.com/embed/VIDEO_ID)" value={chapter.videoUrl} onChange={(e) => handleChapterChange(index, 'videoUrl', e.target.value)} className="mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm" />
                            </div>
                        ))}
                    </div>
                    {(!formData.chapters || formData.chapters.length < 20) && <button type="button" onClick={addChapter} className="px-4 py-2 text-sm bg-blue-100 text-blue-800 rounded-md hover:bg-blue-200">+ Ajouter un chapitre</button>}

                    <div className="flex justify-end pt-6 border-t mt-6">
                        <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md mr-2 hover:bg-gray-300">Annuler</button>
                        <button type="submit" className="px-4 py-2 bg-brand-dark text-white font-bold rounded-md hover:bg-brand-burgundy">Enregistrer</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ClassroomManager;