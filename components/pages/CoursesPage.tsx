import React, { useState, useEffect } from 'react';
import type { Course } from '../../types';
import { db } from '../../firebase';
// FIX: Refactored Firebase v9 imports to v8 syntax.
// import { ref, onValue } from 'firebase/database';

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
        <img src={course.imageUrl} alt={course.title} className="w-full h-56 object-cover group-hover:opacity-80 transition-opacity duration-300" />
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="text-2xl font-serif text-brand-burgundy mb-3">{course.title}</h3>
            <p className="text-gray-700 flex-grow">{course.description}</p>
            <div className="mt-4 pt-4 border-t border-gray-200">
                <p><strong>Durée :</strong> {course.duration}</p>
                <p><strong>Admission :</strong> {course.admission}</p>
            </div>
            <button className="mt-6 bg-brand-dark text-white w-full py-3 font-bold uppercase tracking-wider hover:bg-brand-burgundy transition-colors duration-300">
                Demande d'info
            </button>
        </div>
    </div>
);


const CoursesPage: React.FC = () => {
    const [courses, setCourses] = useState<Course[]>([]);
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

  return (
    <div>
        <header className="bg-brand-dark text-white py-20 text-center" style={{backgroundImage: "url('https://scontent.flbv4-1.fna.fbcdn.net/v/t1.6435-9/102776080_1541929012680926_2589055351735189504_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFBL-UyGsU023e3zLhVjIZdrzbWF3T1DvSvNtYXdPUO9KNU29k5lEzD6PHqbKX9MHyZod-1Ka-1rEBJzxzieWyD&_nc_ohc=chRZLD9pKcgQ7kNvwHC_inC&_nc_oc=AdmhwXjFVy0VW3-2njk2b5d7ECc9W2VlXNd06giBSvWEF7NS7WNQP-CqEM3qwXqyR7M&_nc_zt=23&_nc_ht=scontent.flbv4-1.fna&_nc_gid=wUz2TJp6pN5FqyYwyiAt6g&oh=00_AfUp-tsx4Qd6leU0zwRbX_mGoPK6iN6RdXVcEyVcZ7-EJA&oe=68DD13B2')", backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="bg-black bg-opacity-60 py-10">
                <h1 className="text-5xl font-serif font-bold">Nos Formations</h1>
                <p className="text-lg mt-4">Façonnez votre avenir dans la mode.</p>
            </div>
        </header>

        <section className="py-20 bg-stone-100">
            <div className="container mx-auto px-6">
                {loading ? (
                    <p className="text-center">Chargement des formations...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {courses.map(course => <CourseCard key={course.id} course={course} />)}
                    </div>
                )}
            </div>
        </section>
    </div>
  );
};

export default CoursesPage;