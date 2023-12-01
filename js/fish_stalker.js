if(!navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)){
    document.addEventListener("DOMContentLoaded", function() {
        let mouseX = 0;
        let mouseY = 0;
        let fishX = 0;
        let fishY = 0;
        let angleDeg = 0;
        let deltaX = 0;
        let deltaY = 0;
        let previousValue;
        let sameValueCount = 0;
        let myReq;

        const stalker_kind = [
            ['.header', 'fish_kurage'],
            ['.about-section', 'fish_guppi'],
            ['.career-section', 'fish_iruka'],
            ['.skill-section', 'fish_kujira'],
            ['.award-section', 'fish_kumanomi'],
            ['.publication-section', 'fish_maguro'],
            ['.works-section', 'fish_same'],
            ['.contact-section', 'fish_syachi'],
            ['.footer', 'fish_hone_footer'],
            ['nav', 'fish_hone_gnav']
        ];

        document.addEventListener("mousemove", (event) => {
            mouseX = event.clientX;
            mouseY = event.clientY;
        });

        function updateFishPosition() {
            fishX += (mouseX - fishX) * 0.1;
            fishY += (mouseY - fishY) * 0.1;

            deltaX = mouseX - fishX;
            deltaY = mouseY - fishY;
            angleDeg = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

            pre_angleDeg = angleDeg;

            if (angleDeg < -90) {
                angleDeg += 180;
            } else if (angleDeg > 90) {
                angleDeg -= 180;
            }

            for (elements of stalker_kind) {
                let fish = document.getElementById(elements[1]);
                fish.style.left = fishX + "px";
                fish.style.top = fishY + "px";
                if (Math.abs(pre_angleDeg) < 90) {
                    fish.style.transform = `translate(-100%, -50%) rotate(${angleDeg}deg) scaleX(-1)`;
                } else {
                    fish.style.transform = `translate(0%, -50%) rotate(${angleDeg}deg) scaleX(1)`;
                }
                
                document.querySelector(elements[0]).addEventListener("mouseover", function(e) {
                    fish.style.opacity = '0.3';
                    if (elements[0] == 'nav') fish.style.zIndex = '1';
                    else fish.style.zIndex = '999';
                });
                document.querySelector(elements[0]).addEventListener("mouseout", function(e) {
                    fish.style.opacity = '0.0';
                });
            }

            if (Math.abs(previousValue - angleDeg) < 0.000001) {
                sameValueCount++;
            } else {
                sameValueCount = 0; // 新しい値が出たら連続カウントをリセット
            }
            if (sameValueCount >= 5) {
                cancelAnimationFrame(myReq);
            }
            previousValue = angleDeg;

            myReq = requestAnimationFrame(updateFishPosition);
        }
        
        updateFishPosition();
    });
}
