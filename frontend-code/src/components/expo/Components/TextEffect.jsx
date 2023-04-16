import { text } from '@fortawesome/fontawesome-svg-core';
import React, { useEffect } from 'react';
import '../css/canvas.module.css';

function TextEffect() {
  useEffect(() => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let adjustX = 15;
    let adjustY = -10;
    let particleArray = [];


    const mouse = {
        x: null,
        y: null,
        radius: 150
    }
    
    window.addEventListener('mousemove', function(event){
        mouse.x = event.x;
        mouse.y = event.y;
    });
    
    
    ctx.font = '18px Verdana';
    ctx.fillText('ISTE', 0, 30);
    ctx.fillText('EXPO', 0, 45);

    ctx.strokeRect(0,0,100,100);
    const textCoordinates = ctx.getImageData(0,0,100,100);

    class Particle {
      constructor(x,y){
        this.x = x;
        this.y = y;
        this.size = 1.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random()* 9)+1;
        this.color = '#1a237e';
      }
      draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update(){
        let dx = mouse.x - this.x;
        let dy = mouse.y -this.y;
        let distance = Math.sqrt(dx*dx + dy*dy);
        let forceDirectionX = dx / distance;
        let forceDirectionY = dy / distance;
        let maxDistance = mouse.radius;
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDirectionX*force*this.density;
        let directionY = forceDirectionY*force*this.density;
    
        if(distance<mouse.radius){
          this.x -= directionX;
          this.y -= directionY;
        } else{
          if(this.x !== this.baseX){
            let dx = this.x - this.baseX;
            this.x -=dx/50;
          }
          if(this.y !== this.baseY){
            let dy = this.y - this.baseY;
            this.y -=dy/50;
          }
        }
      }
    }

    function init() {
      particleArray = [];
    //   for (let i = 0; i < 500; i++) {
    //     let x = Math.random() * canvas.width;
    //     let y = Math.random() * canvas.height;
    //     particleArray.push(new Particle(x, y));
    //   }
      for(let y = 0, y2 = textCoordinates.height; y<y2; y++){
        for(let x = 0, x2 = textCoordinates.width; x<x2; x++){
            if(textCoordinates.data[(y*4*(textCoordinates.width))+(x*4)+3]>128){
                let positionX = x + adjustX;
                let positionY = y + adjustY;
                particleArray.push(new Particle(positionX*20, positionY*20));
            }
        }
      }
    }
    init();
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const element of particleArray) {
        element.draw();
        element.update();
      }
      connect();
      requestAnimationFrame(animate);
    }
    animate();
    function connect(){
        let opacityValue = 1;
        for(let a = 0 ; a<particleArray.length; a++){
            for(let b = a; b<particleArray.length; b++){
                // let dx = mouse.x - this.x;
                // let dy = mouse.y -this.y;
                // let distance = Math.sqrt(dx*dx + dy*dy);
                let dx = particleArray[a].x - particleArray[b].x;
                let dy = particleArray[a].y - particleArray[b].y;
                let distance = Math.sqrt(dx*dx + dy*dy);

                if(distance < 35){
                    opacityValue = 1 - (distance/35);
                    ctx.strokeStyle = 'rgba(0,0,0,' + opacityValue + ')';
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(particleArray[a].x, particleArray[a].y);
                    ctx.lineTo(particleArray[b].x, particleArray[b].y);
                    ctx.stroke();
                }
            }
        }
    }
  }, []);

  return <canvas id="canvas1"></canvas>;
}

export default TextEffect;