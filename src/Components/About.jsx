import React from 'react'

export default function About() {
    const features = [
        { title: "React Router", desc: "Multi-page navigation using RouterProvider" },
        { title: "Context API", desc: "Global state for authentication" },
        { title: "Protected UI", desc: "Content changes based on login status" },
    ]
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://thumbs.dreamstime.com/b/cartoon-smiling-man-businessman-working-typing-laptop-notebook-computer-cartoon-stick-drawing-conceptual-125667539.jpg?w=360"
                            alt="image"
                        />
                    </div>
                    <div className="grid sm:grid-cols-3 gap-6 py-10">
                        {features.map((f, index) => (
                            <div key={index} className="p-6 border rounded-lg">
                                <h3 className="font-semibold text-lg">{f.title}</h3>
                                <p className="text-gray-600 mt-2">{f.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}