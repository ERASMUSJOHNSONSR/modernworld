document.addEventListener('DOMContentLoaded', function () {
            const courseData = [
                {
                    id: 0,
                    title: "Introduction to Computers",
                    icon: "💻",
                    objective: "Understand what a computer is, its basic components, and how it works.",
                    lessons: [
                        { title: "<a href='computer.html' style='color:inherit;text-decoration:underline;'>What is a Computer?</a>", points: ["Definition and purpose", "Types of computers (desktop, laptop, etc.)"] },
                        { title: "<a href='hardware.html'  style='color:inherit;text-decoration:underline;'>Basic Hardware Components</a>", points: ["Input Devices (keyboard, mouse)", "Output Devices (monitor, printer)", "CPU and Storage"] },
                        { title: "<a href='startup.html'  style='color:inherit;text-decoration:underline;'>Starting Up and Shutting Down</a>", points: ["Proper on/off procedures", "Sleep, hibernate, and restart"] }
                    ],
                    assessment: [
                        {
                            question: "Which of these is an input device?",
                            options: ["Monitor", "Printer", "Keyboard", "Speakers"],
                            answer: "Keyboard"
                        },
                        {
                            question: "What is the proper way to turn off a computer?",
                            options: ["Unplug it directly", "Hold down the power button until it shuts off", "Click 'Shut down' from the Start/Apple Menu", "Close the lid quickly"],
                            answer: "Click 'Shut down' from the Start/Apple Menu"
                        }
                    ]
                },
                {
                    id: 1,
                    title: "Operating System Basics",
                    icon: "🖱️",
                    objective: "Learn to navigate the operating system interface and perform basic tasks.",
                    lessons: [
                        { title: "<a href='desktop.html' style='color:inherit;text-decoration:underline;'>Understanding the Desktop</a>", points: ["Icons, shortcuts, wallpaper", "Taskbar/Dock, Start Menu"] },
                        { title: "<a href='mouse-keyboard.html' style='color:inherit;text-decoration:underline;'>Using the Mouse and Keyboard</a>", points: ["Click, right-click, drag & drop", "Typing and special keys"] },
                        { title: "<a href='windows-apps.html' style='color:inherit;text-decoration:underline;'>Windows and Applications</a>", points: ["Opening, closing, resizing windows", "Switching between apps"] }
                    ],
                    assessment: [
                        {
                            question: "Which of these is typically found at the bottom of the screen in Windows or macOS?",
                            options: ["Desktop Background", "Taskbar/Dock", "Recycle Bin/Trash", "Web Browser"],
                            answer: "Taskbar/Dock"
                        },
                        {
                            question: "What action is performed by pressing the left mouse button twice quickly?",
                            options: ["Right-click", "Drag and drop", "Single-click", "Double-click"],
                            answer: "Double-click"
                        }
                    ]
                },
                {
                    id: 2,
                    title: "File Management",
                    icon: "📁",
                    objective: "Organize and manage files and folders effectively.",
                    lessons: [
                        { title: "<a href='files-folders.html' style='color:inherit;text-decoration:underline;'>Understanding Files and Folders</a>", points: ["Definitions and purpose", "File types and extensions"] },
                        { title: "<a href='create-rename-delete.html' style='color:inherit;text-decoration:underline;'>Creating, Renaming, Deleting</a>", points: ["Making new folders", "Managing files", "Using Recycle Bin/Trash"] },
                        { title: "<a href='move-copy-files.html' style='color:inherit;text-decoration:underline;'>Moving and Copying Files</a>", points: ["Drag & drop", "Copy & Paste shortcuts"] },
                        { title: "<a href='search-files.html' style='color:inherit;text-decoration:underline;'>Searching for Files</a>", points: ["Using the OS search function"] }
                    ],
                    assessment: [
                        {
                            question: "What is the primary purpose of a folder?",
                            options: ["To store programs", "To organize files", "To browse the internet", "To print documents"],
                            answer: "To organize files"
                        },
                        {
                            question: "When you 'delete' a file, where does it usually go first?",
                            options: ["It's permanently erased", "To a cloud storage", "To the Recycle Bin/Trash", "To a temporary folder"],
                            answer: "To the Recycle Bin/Trash"
                        }
                    ]
                },
                {
                    id: 3,
                    title: "Internet and Email Basics",
                    icon: "🌐",
                    objective: "Safely browse the internet and use email for communication.",
                    lessons: [
                        { title: "<a href='internet-intro.html' style='color:inherit;text-decoration:underline;'>Introduction to the Internet</a>", points: ["What is the internet?", "Web browsers and URLs"] },
                        { title: "<a href='web-browse.html' style='color:inherit;text-decoration:underline;'>Basic Web Browse</a>", points: ["Navigating websites", "Using search engines", "Bookmarks"] },
                        { title: "<a href='email-fundamentals.html' style='color:inherit;text-decoration:underline;'>Email Fundamentals</a>", points: ["Setting up an account", "Sending, receiving, attaching files", "Understanding spam"] }
                    ],
                    assessment: [
                        {
                            question: "What is a web browser used for?",
                            options: ["Typing documents", "Sending emails", "Accessing websites on the internet", "Playing games offline"],
                            answer: "Accessing websites on the internet"
                        },
                        {
                            question: "What should you be cautious about when opening an email attachment?",
                            options: ["It might be too large", "It might contain a virus or malware", "It might be in the wrong format", "It might be a picture"],
                            answer: "It might contain a virus or malware"
                        }
                    ]
                },
                {
                    id: 4,
                    title: "Basic Software Applications",
                    icon: "📝",
                    objective: "Gain familiarity with common productivity tools.",
                    lessons: [
                        { title: "<a href='word-processing.html' style='color:inherit;text-decoration:underline;'>Word Processing</a>", points: ["Opening and saving documents", "Basic text entry and formatting"] },
                        { title: "<a href='spreadsheets-intro.html' style='color:inherit;text-decoration:underline;'>Spreadsheets (Intro)</a>", points: ["Understanding cells, rows, columns", "Basic data entry"] },
                        { title: "<a href='presentations-intro.html' style='color:inherit;text-decoration:underline;'>Presentations (Intro)</a>", points: ["Understanding slides", "Basic content creation"] },
                        { title: "<a href='photo-editing.html' style='color:inherit;text-decoration:underline;'>Photo Viewing & Basic Editing</a>", points: ["Opening images", "Basic rotation and cropping"] }
                    ],
                    assessment: [
                        {
                            question: "Which type of software is best for creating letters and reports?",
                            options: ["Spreadsheet software", "Presentation software", "Word processing software", "Photo editing software"],
                            answer: "Word processing software"
                        },
                        {
                            question: "In a spreadsheet, what is the intersection of a row and a column called?",
                            options: ["A table", "A cell", "A sheet", "A graph"],
                            answer: "A cell"
                        }
                    ]
                },
                {
                    id: 5,
                    title: "Online Safety",
                    icon: "🛡️",
                    objective: "Learn essential practices for staying safe online.",
                    lessons: [
                        { title: "<a href='internet-security.html' style='color:inherit;text-decoration:underline;'>Internet Security Basics</a>", points: ["Viruses, malware, phishing", "Antivirus software"] },
                        { title: "<a href='password-management.html' style='color:inherit;text-decoration:underline;'>Password Management</a>", points: ["Creating strong passwords", "Importance of unique passwords"] },
                        { title: "<a href='protecting-personal-info.html' style='color:inherit;text-decoration:underline;'>Protecting Personal Information</a>", points: ["What to share online", "Recognizing secure sites (HTTPS)"] },
                        { title: "<a href='digital-etiquette.html' style='color:inherit;text-decoration:underline;'>Digital Etiquette</a>", points: ["Being respectful online", "Basic copyright awareness"] }
                    ],
                    assessment: [
                        {
                            question: "What is a strong password typically characterized by?",
                            options: ["Being short and easy to remember", "Using only numbers", "A mix of uppercase, lowercase, numbers, and symbols", "Being your birthdate"],
                            answer: "A mix of uppercase, lowercase, numbers, and symbols"
                        },
                        {
                            question: "What does 'HTTPS' in a website address indicate?",
                            options: ["The website is very popular", "The website is secure and encrypted", "The website is for shopping", "The website is new"],
                            answer: "The website is secure and encrypted"
                        }
                    ]
                }
            ];

            const moduleTabsContainer = document.getElementById('moduleTabs');
            const lessonContentContainer = document.getElementById('lessonContent');
            const progressBar = document.getElementById('progressBar');
            
            let activeModuleId = 0;
            let lessonStates = {};
            const totalLessons = courseData.reduce((acc, module) => acc + module.lessons.length, 0);
            
            courseData.forEach(module => {
                module.lessons.forEach((_, lessonIndex) => {
                    lessonStates[`${module.id}-${lessonIndex}`] = false;
                });
            });

            function renderTabs() {
                moduleTabsContainer.innerHTML = '';
                courseData.forEach(module => {
                    const tab = document.createElement('button');
                    tab.dataset.moduleId = module.id;
                    tab.className = `flex items-center text-sm sm:text-base px-3 py-3 mx-1 sm:mx-2 border-b-4 transition-colors duration-300 ${module.id === activeModuleId ? 'tab-active' : 'tab-inactive'}`;
                    tab.innerHTML = `<span class="mr-2 hidden sm:inline">${module.icon}</span> ${module.title}`;
                    tab.onclick = () => {
                        activeModuleId = module.id;
                        render();
                    };
                    moduleTabsContainer.appendChild(tab);
                });
            }

            function renderContent() {
                const module = courseData[activeModuleId];
                lessonContentContainer.innerHTML = `
                    <div class="bg-amber-50 border-l-4 border-amber-500 text-amber-800 p-4 rounded-r-lg">
                        <p class="font-bold">Module Objective:</p>
                        <p>${module.objective}</p>
                    </div>
                    ${module.lessons.map((lesson, index) => `
                        <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                            <label for="lesson-${module.id}-${index}" class="flex items-center cursor-pointer">
                                <input type="checkbox" id="lesson-${module.id}-${index}" data-lesson-id="${module.id}-${index}" class="h-5 w-5 rounded border-gray-300 text-green-600 focus:ring-green-500" ${lessonStates[`${module.id}-${index}`] ? 'checked' : ''}>
                                <span class="ml-3 font-semibold text-gray-800">${lesson.title}</span>
                            </label>
                            <ul class="list-disc list-inside mt-2 ml-8 text-gray-600 text-sm space-y-1">
                                ${lesson.points.map(point => `<li>${point}</li>`).join('')}
                            </ul>
                        </div>
                    `).join('')}
                    
                    <div class="bg-white p-4 rounded-lg shadow-sm border border-gray-200 mt-6">
                        <button class="w-full text-left font-bold text-lg text-gray-900 py-2 flex justify-between items-center" onclick="toggleAssessment(${module.id})">
                            Module ${module.id + 1} Assessment: Test Your Knowledge <span id="arrow-${module.id}" class="transform transition-transform duration-200">▼</span>
                        </button>
                        <div id="assessment-${module.id}" class="hidden mt-4 space-y-4">
                            ${module.assessment.map((q, qIndex) => `
                                <div class="border-b pb-4 last:border-b-0">
                                    <p class="font-semibold mb-2">Q${qIndex + 1}: ${q.question}</p>
                                    <div class="space-y-2">
                                        ${q.options.map((option, optIndex) => `
                                            <label class="flex items-center cursor-pointer">
                                                <input type="radio" name="question-${module.id}-${qIndex}" value="${option}" class="h-4 w-4 text-blue-600 focus:ring-blue-500">
                                                <span class="ml-2 text-gray-700">${option}</span>
                                            </label>
                                        `).join('')}
                                    </div>
                                    <button class="mt-3 px-4 py-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors" onclick="checkAnswer(this, '${q.answer}', 'question-${module.id}-${qIndex}')">Check Answer</button>
                                    <div id="feedback-${module.id}-${qIndex}" class="mt-2 text-sm font-medium"></div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `;

                lessonContentContainer.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
                    checkbox.addEventListener('change', (e) => {
                        lessonStates[e.target.dataset.lessonId] = e.target.checked;
                        updateProgress();
                    });
                });
            }

            function updateProgress() {
                const completedLessons = Object.values(lessonStates).filter(Boolean).length;
                const progressPercentage = totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0;
                
                progressBar.style.width = `${progressPercentage}%`;
                progressBar.textContent = `${progressPercentage}%`;
            }

            function renderChart() {
                const ctx = document.getElementById('moduleChart').getContext('2d');
                new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: courseData.map(m => m.title),
                        datasets: [{
                            label: 'Lessons per Module',
                            data: courseData.map(m => m.lessons.length),
                            backgroundColor: [
                                'rgba(251, 191, 36, 0.8)',
                                'rgba(59, 130, 246, 0.8)',
                                'rgba(16, 185, 129, 0.8)',
                                'rgba(239, 68, 68, 0.8)',
                                'rgba(139, 92, 246, 0.8)',
                                'rgba(96, 165, 250, 0.8)'
                            ],
                            borderColor: '#fdfbf7',
                            borderWidth: 3
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                position: 'bottom',
                                labels: {
                                    boxWidth: 15,
                                    padding: 15,
                                    font: {
                                        size: 10
                                    }
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    label: function(context) {
                                        let label = context.dataset.label || '';
                                        if (label) {
                                            label += ': ';
                                        }
                                        if (context.parsed !== null) {
                                            label += context.parsed + ' lessons';
                                        }
                                        return label;
                                    }
                                }
                            }
                        }
                    }
                });
            }

            function render() {
                renderTabs();
                renderContent();
            }

            // Global functions for assessment interaction
            window.checkAnswer = function(buttonElement, correctAnswer, radioGroupName) {
                const radios = document.querySelectorAll(`input[name="${radioGroupName}"]`);
                let selectedValue = null;
                radios.forEach(radio => {
                    if (radio.checked) {
                        selectedValue = radio.value;
                    }
                    radio.disabled = true;
                });

                const feedbackDiv = buttonElement.nextElementSibling;
                if (selectedValue === correctAnswer) {
                    feedbackDiv.className = 'mt-2 text-sm font-medium text-green-600';
                    feedbackDiv.textContent = 'Correct! Well done.';
                } else if (selectedValue) {
                    feedbackDiv.className = 'mt-2 text-sm font-medium text-red-600';
                    feedbackDiv.textContent = `Incorrect. The correct answer was: ${correctAnswer}`;
                } else {
                    feedbackDiv.className = 'mt-2 text-sm font-medium text-gray-600';
                    feedbackDiv.textContent = 'Please select an answer.';
                    radios.forEach(radio => radio.disabled = false);
                    return;
                }
                buttonElement.disabled = true;
            };

            window.toggleAssessment = function(moduleId) {
                const assessmentDiv = document.getElementById(`assessment-${moduleId}`);
                const arrowSpan = document.getElementById(`arrow-${moduleId}`);
                if (assessmentDiv.classList.contains('hidden')) {
                    assessmentDiv.classList.remove('hidden');
                    arrowSpan.classList.add('rotate-180');
                } else {
                    assessmentDiv.classList.add('hidden');
                    arrowSpan.classList.remove('rotate-180');
                }
            };

            render();
            updateProgress();
            renderChart();
        });


  document.getElementById('navToggle').addEventListener('click', () => {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('hidden');
});
