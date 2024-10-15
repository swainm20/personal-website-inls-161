"use client";
import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from './globals.css'; // Optional: Use CSS modules for styling

export default function Home() {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const today = new Date();
        const hour = today.getHours();
        let greetingMessage;

        if (hour < 12) {
            greetingMessage = 'Good morning!';
        } else if (hour < 18) {
            greetingMessage = 'Good afternoon!';
        } else {
            greetingMessage = 'Good evening!';
        }

        setGreeting(greetingMessage);
    }, []);

    return (
        <div>
            <Head>
                <meta charset="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Page for Madison Swain's personal website." />
                <meta name="keywords" content="information literacy, information tools, personal, resume, about" />
                <title>Madison Swain Website</title>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <header style={{ backgroundColor: 'rgb(124, 60, 156)', color: 'white', padding: '2rem', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h1>Welcome to Madison's Personal Website</h1>
                <p>Contact: 
                    <a href="mailto:swainm@unc.edu">swainm@unc.edu</a>
                </p>
                <nav>
                    <a href="#about">About Me</a> | 
                    <a href="#classes">Classes</a> | 
                    <a href="#interests">Interests</a>
                </nav>
            </header>

            <h2>{greeting}</h2> {/* Greeting will appear here. */}

            {/* About Section */}
            <section id="about">
                <h2>About Me</h2>
                <div style={{ textAlign: 'center' }}>
                    <img src="/images/Headshot_MadiSwain.jpg" alt="Madison Swain" style={{ maxWidth: '200px', height: 'auto', borderRadius: '50%' }} />
                    <p>A third-year student at the University of North Carolina at Chapel Hill, double majoring in Advertising and Public Relations at the Hussman School of Journalism and Media and Information Science, with a Certificate in Business Communication.</p>
                    <a href="/resumes/Resume_MadiSwain.pdf" target="_blank">View my Resume (PDF)</a>
                </div>
            </section>

            {/* Classes Section */}
            <section id="classes">
                <h2>Current Classes</h2>
                <ul>
                    <li><a href="https://ils.unc.edu/courses/2024_fall/inls161_001/s01.syllabus.html">INLS 161</a></li>
                    <li><a href="https://ils.unc.edu/courses/2024_fall/inls201_001/">INLS 201</a></li>
                    <li><a href="https://uncch.instructure.com/courses/67160">MEJO 137</a></li>
                    <li><a href="https://uncch.instructure.com/courses/67195">MEJO 153</a></li>
                    <li><a href="https://uncch.instructure.com/courses/67433">MEJO 467</a></li>
                </ul>
            </section>

            {/* Interests Section */}
            <section id="interests">
                <h2>Interests</h2>
                <ol>
                    <li>The Book Thief</li>
                    <li>Pride and Prejudice</li>
                    <li>Harry Potter and the Deathly Hallows</li>
                    <li>The Great Gatsby</li>
                    <li>Canon of Sherlock Holmes</li>
                    <li>Rebecca</li>
                    <li>The Secret History</li>
                    <li>Gone Girl</li>
                    <li>Lord of the Rings</li>
                    <li>All the Light We Cannot See</li>
                </ol>
            </section>

            <footer>
                <p>Last updated: {new Date().toLocaleDateString()}</p>
            </footer>
        </div>
    );
}
