{\rtf1\ansi\ansicpg1252\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0  document.addEventListener('DOMContentLoaded', function() \{\
        // Mobile sidebar toggle\
        const sidebarToggle = document.getElementById('sidebarToggle');\
        const sidebar = document.querySelector('.sidebar');\
        const mainContent = document.querySelector('.main-content');\
        \
        sidebarToggle?.addEventListener('click', () => \{\
            sidebar.classList.toggle('show');\
        \});\
\
        // Close sidebar when clicking outside on mobile\
        document.addEventListener('click', (e) => \{\
            if (window.innerWidth <= 768) \{\
                if (!sidebar.contains(e.target) && !sidebarToggle.contains(e.target)) \{\
                    sidebar.classList.remove('show');\
                \}\
            \}\
        \});\
\
        // Handle navigation\
        const navLinks = document.querySelectorAll('.nav-link');\
        navLinks.forEach(link => \{\
            link.addEventListener('click', (e) => \{\
                navLinks.forEach(l => l.classList.remove('active'));\
                link.classList.add('active');\
            \});\
        \});\
    \});}