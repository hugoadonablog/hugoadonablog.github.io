document.addEventListener('DOMContentLoaded', () => {
    const posts = [
        {
            title: '5 Essential Coding Practices Every Beginner Should Know',
            content: `Starting your coding journey can be both exciting and challenging. With a plethora of resources available, it's crucial to focus on essential practices that will set you up for long-term success. Here are five fundamental coding practices that every beginner should know.

1. <b>Write Clean and Readable Code</b>
Clean code is the backbone of efficient programming. Writing clean and readable code makes it easier for you and others to understand, debug, and maintain your projects. Use meaningful variable names that reflect their purpose, adhere to consistent indentation, and comment your code to explain complex logic. Remember, code is read more often than it is written, so make it as readable as possible.

2. <b>Practice Consistently</b>
Like any other skill, coding requires regular practice to improve. Dedicate time each day to coding, even if it's just for a short period. Consistent practice helps reinforce what you learn and keeps you engaged with the material. Utilize coding platforms like LeetCode, HackerRank, or Codecademy to practice solving problems and applying concepts.

3. <b>Understand the Basics</b>
Before diving into advanced topics, ensure you have a solid grasp of basic concepts like loops, conditionals, data structures, and algorithms. These fundamentals are the building blocks of all programming languages and are essential for understanding more complex topics. Spend time mastering these basics, as they will make learning advanced concepts much easier.

4. <b>Debugging is Key</b>
Debugging is an integral part of coding. Learning to debug effectively will save you time and frustration. Use debugging tools available in your development environment, and read error messages carefully to understand where your code is going wrong. Developing a systematic approach to debugging will improve your problem-solving skills and make you a more efficient coder.

5. <b>Join a Coding Community</b>
Engage with fellow coders through online forums, social media groups, or local meetups. Being part of a coding community provides support, resources, and opportunities to collaborate on projects. Communities like Stack Overflow, GitHub, and Reddit's r/learnprogramming are excellent places to ask questions, share knowledge, and find inspiration.

By following these essential coding practices, you'll build a strong foundation and set yourself up for success in your coding journey. Remember to write clean code, practice consistently, understand the basics, develop strong debugging skills, and engage with the coding community. Happy coding!

<i>Keywords: coding for beginners, coding practices, clean code, debugging, coding community, programming basics, consistent practice</i>`,
            image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Replace with your image URL
        },
        {
            title: 'Top 5 Programming Languages to Learn in 2024',
            content: `Choosing the right programming language to learn can be daunting, especially with the ever-evolving tech landscape. To help you make an informed decision, here are the top five programming languages to learn in 2024.

1. <b>Python</b>
Python continues to be a favorite among beginners and professionals alike. Its simple syntax, readability, and extensive libraries make it ideal for web development, data analysis, artificial intelligence, and scientific computing. With a strong community and a wealth of resources, Python is an excellent choice for those starting their coding journey.

2. <b>JavaScript</b>
JavaScript is the backbone of web development. As the most widely used language for creating interactive web applications, learning JavaScript is essential for anyone interested in frontend development. With frameworks like React, Angular, and Vue.js, JavaScript offers powerful tools for building modern web applications.

3. <b>Java</b>
Java has been a staple in the programming world for decades, known for its portability and performance. It’s widely used in enterprise environments, Android app development, and large-scale systems. Learning Java provides a solid foundation in object-oriented programming and opens up numerous career opportunities.

4. <b>Go</b>
Go, also known as Golang, is gaining popularity for its simplicity, efficiency, and performance. Developed by Google, Go is designed for building scalable and high-performance applications. It’s particularly well-suited for cloud computing, distributed systems, and backend development.

5. <b>Rust</b>
Rust is renowned for its focus on safety and performance, making it an excellent choice for system-level programming. It eliminates common bugs and security vulnerabilities through its ownership model. Rust is increasingly used in developing operating systems, game engines, and high-performance applications.

Choosing the right programming language depends on your career goals and interests. Python, JavaScript, Java, Go, and Rust each offer unique benefits and opportunities. By learning one or more of these languages, you’ll be well-equipped to thrive in the tech industry in 2024 and beyond.

<i>Keywords: programming languages 2024, best programming languages, learn Python, JavaScript development, Java programming, Go language, Rust programming, coding in 2024</i>`,
            image: 'https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' // Replace with your image URL
        }
    ];

    const reversedPosts = posts.slice().reverse();

    const postsContainer = document.getElementById('posts');

    reversedPosts.forEach(post => {
        createPostElement(post, postsContainer);
    });
});

function createPostElement(post, container) {
    const postElement = document.createElement('div');
    postElement.classList.add('post');

    const postTitle = document.createElement('h2');
    postTitle.textContent = post.title;

    const postImage = document.createElement('img');
    postImage.src = post.image;
    postImage.alt = post.title;
    postImage.classList.add('post-image');

    const postContent = document.createElement('p');
    postContent.innerHTML = post.content; // Use innerHTML to render HTML tags

    postElement.appendChild(postTitle);
    postElement.appendChild(postImage);
    postElement.appendChild(postContent);

    container.appendChild(postElement);
}
