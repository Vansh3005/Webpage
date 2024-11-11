// ===========================================Main Content===================================================>

    const content=document.querySelector("body")
    content.style.backgroundImage="linear-gradient(to top,white,black,grey)"
    content.style.display="flex"
    content.style.justifyContent="space-around"
    
// ===========================================Rainy Day===================================================>
        
    const button1=document.createElement("button")
    button1.style.height="550px"
    button1.style.width="250px"
    button1.style.position="relative"
    button1.style.top="55px"
    button1.style.borderRadius="5px"
    button1.style.backgroundImage="url('rain-275313.jpg')"
    button1.style.backgroundSize="cover"
    
    button1.addEventListener("click",()=>{
        const audio=document.createElement("audio")
        audio.src="lightning-237994.mp3"
        audio.play()
    
        const cloud=document.createElement("img")
        let value1="cloud-removebg-preview.png"
        cloud.setAttribute("src",value1)
        cloud.style.width="140px"
        cloud.style.position="absolute"
        cloud.style.bottom="485px"
        cloud.style.animation="cloudScroll ease 5s infinite"
    
        button1.appendChild(cloud)
    })
    
    content.appendChild(button1)
    
    const text1=document.createElement("p")
    text1.innerHTML="Click, On Walpaper For Feels Sound On It"
    text1.style.fontFamily="cursive"
    text1.style.fontWeight="bold"
    text1.style.animationName="changeColor"
    text1.style.animationDelay="0s"
    text1.style.animationIterationCount="infinite"
    text1.style.animationDuration="6s"
    text1.style.position="absolute"
    text1.style.top="100%"
    text1.style.right="5px"
    text1.style.textAlign="center"
    text1.style.fontSize="18px"
    
    button1.appendChild(text1)
    
// ===========================================Sunny Day===================================================>
    
    const button2=document.createElement("button")
    button2.style.height="550px"
    button2.style.width="250px"
    button2.style.position="relative"
    button2.style.top="55px"
    button2.style.borderRadius="5px"
    button2.style.backgroundImage="url('pexels-guihankenne-2792077.jpg')"
    button2.style.backgroundPosition="center"
    button2.style.backgroundSize="cover"
    
    button2.addEventListener("click",()=>{
        const audio=document.createElement("audio")
        audio.src="summer-insects-243572.mp3"
        audio.play()
    
        const sun=document.createElement("img")
        let value2="sun1-removebg-preview.png"
        sun.setAttribute("src",value2)
        sun.style.width="150px"
        sun.style.position="absolute"
        sun.style.bottom="485px"
        sun.style.animation="sunScroll ease 10s infinite"
        sun.style.zIndex="-1"
    
        button2.appendChild(sun)
    })
    
    
    content.appendChild(button2)
    
    const text2=document.createElement("p")
    text2.innerHTML="Click, On Walpaper For Feels Sound On It"
    text2.style.fontFamily="cursive"
    text2.style.fontWeight="bold"
    text2.style.animationName="changeColor1"
    text2.style.animationDelay="0s"
    text2.style.animationIterationCount="infinite"
    text2.style.animationDuration="6s"
    text2.style.position="absolute"
    text2.style.top="100%"
    text2.style.right="5px"
    text2.style.textAlign="center"
    text2.style.fontSize="18px"
    
    button2.appendChild(text2)
    
// ===========================================Autumn Day===================================================>
    
    const button3=document.createElement("button")
    button3.style.height="550px"
    button3.style.width="250px"
    button3.style.position="relative"
    button3.style.top="55px"
    button3.style.borderRadius="5px"
    button3.style.backgroundImage="url('pexels-tomas-anunziata-129267-695207.jpg')"
    button3.style.backgroundPosition="center"
    button3.style.backgroundSize="cover"
    
    button3.addEventListener("click",()=>{
        const audio=document.createElement("audio")
        audio.src="record-early-autumn-japanese-forest-waterfall-sounds-164893.mp3"
        audio.play()
    
        const aut=document.createElement("img")
        let value3="fire-removebg-preview.png"
        aut.setAttribute("src",value3)
        aut.style.width="100px"
        aut.style.position="absolute"
        aut.style.right="-9.5px"
        aut.style.bottom="485px"
        aut.style.animation="leafScroll ease 10s infinite"
        aut.style.zIndex="-1"
        
    
        button3.appendChild(aut)
    })
        
    content.appendChild(button3)
        
    const text3=document.createElement("p")
    text3.innerHTML="Click, On Walpaper For Feels Sound On It"
    text3.style.fontFamily="cursive"
    text3.style.fontWeight="bold"
    text3.style.animationName="changeColor2"
    text3.style.animationDelay="0s"
    text3.style.animationIterationCount="infinite"
    text3.style.animationDuration="6s"
    text3.style.position="absolute"
    text3.style.top="100%"
    text3.style.right="5px"
    text3.style.textAlign="center"
    text3.style.fontSize="18px"
        
    button3.appendChild(text3)
    
// ===========================================Winter Day===================================================>
    
    const button4=document.createElement("button")
    button4.style.height="550px"
    button4.style.width="250px"
    button4.style.position="relative"
    button4.style.top="55px"
    button4.style.borderRadius="5px"
    button4.style.backgroundImage="url('pexels-angelkwill-10809405.jpg')"
    button4.style.backgroundPosition="center"
    button4.style.backgroundSize="cover"
        
    button4.addEventListener("click",()=>{
        const audio=document.createElement("audio")
        audio.src="snow-rain-bird-chirping-19560.mp3"
        audio.play()
    
        const winter=document.createElement("img")
        let value4="snow-removebg-preview.png"
        winter.setAttribute("src",value4)
        winter.style.width="150px"
        winter.style.position="absolute"
        winter.style.bottom="485px"
        winter.style.animation="leafScroll ease 10s infinite"
        winter.style.zIndex="-1"
        
    
        button4.appendChild(winter)
    })
            
    content.appendChild(button4)
            
    const text4=document.createElement("p")
    text4.innerHTML="Click, On Walpaper For Feels Sound On It"
    text4.style.fontFamily="cursive"
    text4.style.fontWeight="bold"
    text4.style.animationName="changeColor3"
    text4.style.animationDelay="0s"
    text4.style.animationIterationCount="infinite"
    text4.style.animationDuration="6s"
    text4.style.position="absolute"
    text4.style.top="100%"
    text4.style.right="5px"
    text4.style.textAlign="center"
    text4.style.fontSize="18px"
            
    button4.appendChild(text4)
    
// ===========================================Spring Day===================================================>
    
    const button5=document.createElement("button")
    button5.style.height="550px"
    button5.style.width="250px"
    button5.style.position="relative"
    button5.style.top="55px"
    button5.style.borderRadius="5px"
    button5.style.backgroundImage="url('nature-7152461.jpg')"
    button5.style.backgroundPosition="center"
    button5.style.backgroundSize="cover"
        
    button5.addEventListener("click",()=>{
        const audio=document.createElement("audio")
        audio.src="birdsong-springenglish-countryside-33613.mp3"
        audio.play()
    
        const spring=document.createElement("img")
        let value5="spring-removebg-preview.png"
        spring.setAttribute("src",value5)
        spring.style.width="110px"
        spring.style.position="absolute"
        spring.style.bottom="485px"
        spring.style.left="160px"
        spring.style.animation="springScroll ease 10s infinite"
        spring.style.zIndex="-1"
        
    
        button5.appendChild(spring)
    })
            
    content.appendChild(button5)
            
    const text5=document.createElement("p")
    text5.innerHTML="Click, On Walpaper For Feels Sound On It"
    text5.style.fontFamily="cursive"
    text5.style.fontWeight="bold"
    text5.style.animationName="changeColor4"
    text5.style.animationDelay="0s"
    text5.style.animationIterationCount="infinite"
    text5.style.animationDuration="6s"
    text5.style.position="absolute"
    text5.style.top="100%"
    text5.style.right="5px"
    text5.style.textAlign="center"
    text5.style.fontSize="18px"
            
    button5.appendChild(text5)
    
    
    
    
    