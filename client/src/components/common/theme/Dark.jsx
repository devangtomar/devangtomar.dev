export function Dark(): void {
    console.log('Checking for Dark function call!');
    const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    // Ensure the icons exist before toggling
    if (themeToggleDarkIcon && themeToggleLightIcon) {
        // Toggle icons inside button
        themeToggleDarkIcon.classList.toggle('hidden');
        themeToggleLightIcon.classList.toggle('hidden');
    }

    // Check the current theme from local storage or the document class
    const currentTheme = localStorage.getItem('color-theme');
    const isDarkMode = document.documentElement.classList.contains('dark');

    if (currentTheme === 'dark' || (!currentTheme && isDarkMode)) {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('color-theme', 'light');
    } else {
        document.documentElement.classList.add('dark');
        localStorage.setItem('color-theme', 'dark');
    }
}
