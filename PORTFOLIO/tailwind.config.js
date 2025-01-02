tailwind.config = {
    theme:{
        extend:{
             gridTemplateColums:{
            'auto':'repeat(auto-Fit, minmax(200px, 1fr))'
        },
        fontFamily:{
            outfit:["Outfit", "serif"],
            Ovo: ["Ovo", "serif"]
        },
        animation:{
            spin_slow: 'spin 6s linear infinite'
        },
        colors:{
            lightHover: '#fcf4ff',
            darkHover: '#2a004a',
            darkTheme: '#11001f'
        }
    }
        },
     darkMode: 'selector'  
}