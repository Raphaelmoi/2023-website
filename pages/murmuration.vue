<template>
    <section class="murmuration">
        <div class="playPauseBtn" @click="play ? stop() : start() ;play=!play"> {{ play ? 'pause' : 'play'}} </div>

        <div class="bird" :style="{left: b.x +'px', top:b.y+'px', width:b.size+'px', height:b.size+'px', backgroundColor: b.color }"  v-for="(b, i) in birds" :key="i"  ></div>
    </section>

</template>

<script>
export default {
    data() {
        return {
            framespeed:35,
            play:true,
            bird: {x: 300, y:300, size: 12, direction_x:1, direction_y:1, key:null, color:'white', isMaster: false, isTouched:false},
            birds: [],
            master_bird: {},
            birds_qtt: 200,
            canvas: {width:null, height: null},
            interval: null, /**container du setInterval */
            speed: 8,
            distance_from_border: 20,

            x_max_distance:0,
            y_max_distance:0,

            directions: {
                top:-1,
                left:-1,
                right: 1,
                bottom: 1,
                center:0
            },
            frameCount:0
        }
    },
    mounted(){
        this.$nextTick(()=> {
            this.canvas.height = this.$el.clientHeight - this.bird.size
            this.canvas.width  = this.$el.clientWidth - this.bird.size

            this.x_max_distance = this.canvas.width - this.distance_from_border
            this.y_max_distance = this.canvas.height - this.distance_from_border
        
            this.displayBirds()
            this.master_bird = this.birds[0]
            this.start()
        })
    },
    beforeDestroy(){
        clearInterval( this.interval )
    },
    methods: {
        start(){
             this.interval = setInterval(() => {
                    this.birds.forEach(element => {
                        this.fly(element)
                    });
                    this.frameCount++
                    const randomDirection =  this.randomNumber(0,300)
                    if (this.frameCount% randomDirection === 0) {
                        const toggle = this.randomNumber(0,1)
                        // this.master_bird.direction_x 
                        if (toggle == true) {
                            this.master_bird.direction_y = this.master_bird.direction_y *-1 
                        } else {
                            this.master_bird.direction_x = this.master_bird.direction_x *-1 
                        }
                    }
            }, this.framespeed);
        },
        stop(){
            clearInterval( this.interval )
        },
        displayBirds(){
            for (let i = 0; i < this.birds_qtt; i++) {
                // creer un nouvel oiseau avec une positon dans le cadre
                let newBird = {...this.bird}
                newBird.x = this.randomNumber(this.distance_from_border, this.canvas.width - this.distance_from_border )
                newBird.y = this.randomNumber(this.distance_from_border, this.canvas.height - this.distance_from_border )
                // newBird.direction_x = this.randomNumber(1,5)
                // newBird.direction_y =  this.randomNumber(1,5)
                // newBird.size =  this.randomNumber(30,62)
                newBird.key = i
                if (i === 0) {
                    newBird.isMaster = true
                    newBird.color = "red"
                }
                this.birds.push(newBird)
            }
        },
        fly(bird_el){  
            if (bird_el.isMaster || bird_el.isTouched) {
                
                const findContact = this.birds.findIndex((el) => {
                    if (el.key !== bird_el.key ) {
                        // true si le centre de l'elem - le centre de l'elem comparé et inferieur à la taille du plus grand des 2 oiseau
                        const t = Math.abs((el.x + (el.size*0.5)) - ( bird_el.x + (el.size*0.5) )) <= Math.max(el.size, bird_el.size )//*2
                        const u = Math.abs((el.y + (el.size*0.5)) - ( bird_el.y + (el.size*0.5) )) <= Math.max(el.size, bird_el.size )//*2
                        return t && u
                    }
                })
                
                // true si l'element est immobile
                const isStopped = bird_el.direction_x === 0 && bird_el.direction_y === 0 

                const isTouchingRightborder = bird_el.x >= this.x_max_distance - bird_el.size
                const isTouchingLeftborder = bird_el.x <= this.distance_from_border 
                const isTouchingTopborder = bird_el.y <= this.distance_from_border
                const isTouchingBottomborder = bird_el.y >= this.y_max_distance- bird_el.size

             
                
                if (bird_el.isTouched && findContact == -1  ) {
                    bird_el.direction_x = this.master_bird.direction_x
                    bird_el.direction_y = this.master_bird.direction_y
                } else if (bird_el.isTouched){
                    if (isTouchingRightborder || isTouchingLeftborder || isTouchingTopborder || isTouchingBottomborder) {
                        this.master_bird.isTouched = true
                        this.master_bird.isMaster = false
                        this.master_bird.color = "white"
                        this.master_bird = null
                        this.master_bird = bird_el
                        this.master_bird.isMaster = true
                        this.master_bird.color = "red"
                        // this.stop()
                        //  this.play=false
                    }
                    // bird_el.direction_x =  bird_el.direction_x*-1
                    // bird_el.direction_y =  bird_el.direction_y*-1
                }
       
                // if (findContact != -1 && this.birds[findContact].isMaster === false) {
                if (findContact != -1 && this.birds[findContact].isMaster === false) {
                    // this.birds[findContact].color = "teal"
                    this.birds[findContact].isTouched = true
                } 

                if(isTouchingRightborder || isTouchingLeftborder){
                    if( isTouchingRightborder ){
                        bird_el.x = this.x_max_distance-bird_el.size
                        bird_el.direction_x =  this.randomNumber(this.directions.left, this.directions.left*3) // this.randomNumber( this.directions.left, this.directions.center )
                    } else {
                        bird_el.x = this.distance_from_border
                        bird_el.direction_x =  this.randomNumber(this.directions.right, this.directions.right*3) //this.directions.right // this.randomNumber( this.directions.center, this.directions.right )
                    }
                    bird_el.x += bird_el.direction_x * (this.speed )
                }
                bird_el.x += bird_el.direction_x * this.speed

                // if(isTouchingRightborder ){
                //     bird_el.x = this.x_max_distance-bird_el.size
                //     // bird_el.color="blue"
                //     bird_el.direction_x =  this.randomNumber(this.directions.left, this.directions.left*3) // this.randomNumber( this.directions.left, this.directions.center )
                //     bird_el.x += bird_el.direction_x * (this.speed )
                // } else if(isTouchingLeftborder) {
                //     bird_el.x = this.distance_from_border
                //     // bird_el.color="gold"
                //     bird_el.direction_x =  this.randomNumber(this.directions.right, this.directions.right*3) //this.directions.right // this.randomNumber( this.directions.center, this.directions.right )
                //     bird_el.x += bird_el.direction_x * (this.speed )
                // }
                // else{ 
                    // if (bird_el.isTouched ) {
                    //     bird_el.direction_x = this.master_bird.direction_x
                    //     bird_el.direction_y = this.master_bird.direction_y
                    //     bird_el.x += bird_el.direction_x * this.speed
                    // } else {
                    // if (bird_el.isMaster) {
                    //     bird_el.x += bird_el.direction_x * this.speed
                    // }else bird_el.x += bird_el.direction_x * (this.speed+1)
                    // }
                // }
                if(isTouchingTopborder ){
                    // bird_el.color="purple"
                    bird_el.y = this.distance_from_border
                    bird_el.direction_y = this.randomNumber(this.directions.bottom, this.directions.bottom*3) 
                    // bird_el.direction_y = this.directions.bottom //  this.randomNumber( this.directions.bottom, this.directions.center )
                    bird_el.y += bird_el.direction_y * (this.speed )
                } else if(isTouchingBottomborder) {
                    // bird_el.color="green"
                    bird_el.y = this.y_max_distance - bird_el.size
                    bird_el.direction_y =  this.randomNumber(this.directions.top, this.directions.top*3) // this.randomNumber( this.directions.center, this.directions.top )
                    bird_el.y += bird_el.direction_y * (this.speed )
                }
                else{ 
                    if (bird_el.isMaster) {
                        bird_el.y += bird_el.direction_y* this.speed
                    } else bird_el.y += bird_el.direction_y * (this.speed+1)
                }
            }
        },
        randomNumber(min = -1, max = 1){
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
      
    }
}
</script>

<style>
    .murmuration {
        width: 100%;
        height: 100vh;
        background: #000;
        position: absolute;
        top: 0;
        overflow: hidden;
    }
    .bird {
        position: absolute;
        top: 0;
        left: 0;
        /* width: 20px;
        height: 20px; */
        background: white;
        border-radius: 50%;
    }
    .playPauseBtn {
        position: absolute;
        right: 0;
        top: 0;
        background: white;
    }
</style>