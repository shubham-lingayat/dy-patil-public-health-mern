import React from "react";
import '../pages/ThankYou.css';
import { useEffect, useRef } from "react";

function ThankYou() {
  const url = process.env.REACT_APP_URL || "#";

  // Bouncing Ball Animation - START
  const canvasRef = useRef(null);
  const mouse = useRef({ x: undefined, y: undefined });

  useEffect(() => {
    const canvas = canvasRef.current;
    const c = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const getRandomInt = (max) => Math.floor(Math.random() * max);

    function Circle() {
      this.radius = getRandomInt(10);
      this.originalSize = this.radius;
      this.x = Math.random() * (window.innerWidth - this.radius * 2) + this.radius;
      this.y = Math.random() * (window.innerHeight - this.radius * 2) + this.radius;
      this.gradient = Math.random();
      this.color = `rgba(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)},${this.gradient})`;
      this.xVelocity = 5 * (Math.random() - Math.random());
      this.yVelocity = 5 * (Math.random() - Math.random());

      this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.strokeStyle = this.color;
        c.stroke();
        c.fillStyle = this.color;
        c.fill();
        this.update();
      };

      this.update = () => {
        if (this.x + this.radius > window.innerWidth || this.x - this.radius < 0) {
          this.xVelocity = -this.xVelocity;
        }
        if (this.y + this.radius > window.innerHeight || this.y - this.radius < 0) {
          this.yVelocity = -this.yVelocity;
        }
        this.x += this.xVelocity;
        this.y += this.yVelocity;

        if (
          mouse.current.x - this.x < 50 &&
          mouse.current.x - this.x > -50 &&
          mouse.current.y - this.y < 50 &&
          mouse.current.y - this.y > -50
        ) {
          if (this.radius < 100) {
            this.radius += 2;
          }
        } else if (this.radius !== this.originalSize) {
          this.radius -= 2;
        }
      };
    }

    const circleArray = Array.from({ length: 30 }, () => new Circle());

    const animate = () => {
      c.clearRect(0, 0, window.innerWidth, window.innerHeight);
      circleArray.forEach((circle) => circle.draw());
      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e) => {
      mouse.current.x = e.x;
      mouse.current.y = e.y;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  // Bouncing Ball Animation - END
 
  return (
    <div className="thankyou_01">
      <canvas ref={canvasRef} className="grey darken-4" />
      <div className="tankyou">
          <div className="logo"><img src={`${url}images/dypatil/logo/thankyou.webp`} alt="logo"/> </div>
          <div className="cong"><img src={`${url}images/dypatil/logo/3.webp`} alt="cong"/> </div>
          <div className="text">
              <span>You have successfully completed
                  <br/>your Step 1 towards Application at D Y Patil University Navi Mumbai.
              </span>
          </div>
      </div>
    </div>
  );
}

export default ThankYou;
