console.log('welcome to drag and drop tutorial');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whiteBox');

//adding event listener to the draggable elements
imgBox.addEventListener('dragstart' , (e)=>{
    console.log('dragstart has been fired');
    e.target.className += ' hold';
    setTimeout(() => {
        e.target.className = 'hide';
    }, 0);
    
});

imgBox.addEventListener('dragend', (e) => {
    console.log('DragEnd has been triggered');
    e.target.className = 'imgBox';
});

for(whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover' , (e)=>{
        e.preventDefault();
        console.log('dragover has been fired');
        
    })

    whiteBox.addEventListener('dragenter' , (e)=>{
        e.target.className += ' dashed';
        console.log('dragenter has been fired');
        
    })
    
    whiteBox.addEventListener('dragleave' , (e)=>{
       e.target.className = 'whiteBox';
        console.log('dragleave has been fired');
        
    })
    
    whiteBox.addEventListener('drop' , (e)=>{
       e.target.append(imgBox);
        console.log('drop has been fired');
        
    })
    
}