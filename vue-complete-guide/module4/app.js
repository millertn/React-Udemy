new Vue({
    el: '#app',
    data: {
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning:false,
        log:[]
    }, 
    computed: {
    },
    watch : {
    },
    methods : {
        attack:function() {
            let playerDamage = this.getDamage(10, 3);
            let monsterDamage = this.getDamage(12, 5);

            this.monsterHealth -= playerDamage;
            this.addLogItem('You did ' + playerDamage + " Damage to the monster!", 'player');

            this.checkWinState();

            this.playerHealth -= monsterDamage;
            this.addLogItem('The monsted did ' + monsterDamage + " Damage to You!", 'monster');
            this.checkWinState();
            
        },
        heal:function() {
            let regen = this.getHealth();
            console.log(regen);
            this.playerHealth += regen;
            this.addLogItem('You regened ' + regen + "Health!", "player");

            let monsterDamage = this.getDamage(12, 5);
            this.playerHealth -= monsterDamage;
            this.addLogItem('The monsted did ' + monsterDamage + " Damage to You!", 'monster');

            this.checkWinState();

        }, 
        specialAttack:function() {
            let playerDamage = this.getDamage(15, 5);
            let monsterDamage = this.getDamage(12, 5);

            this.monsterHealth -= playerDamage;
            this.addLogItem('You did ' + playerDamage + " Damage to the monster!", 'player');

            this.checkWinState();

            this.playerHealth -= monsterDamage;
            this.addLogItem('The monsted did ' + monsterDamage + " Damage to You!", 'monster');
            this.checkWinState();

        },
        giveUp:function() {
            this.playerHealth = 0;
            this.checkWinState();
        },
        startGame:function() {
           this.gameIsRunning = true; 
           this.playerHealth = 100;
           this.monsterHealth = 100;
           this.log = [];
        },
        getDamage:function (max, min) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        getHealth:function() {
            return 10;
        },
        checkWinState:function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You Won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = aflse;
                }
            } else if (this.playerHealth <= 0) {
                if (confirm("You Lost :( New Game?")){
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
            }
        },
        addLogItem:function(text, type) {
            if (type == 'monster') {
                this.log.unshift("<span class='monsterText'>" + text + "</span>");
            } else if (type == 'player') {
                this.log.unshift("<span class='playerText'>" + text + "</span>");

            }
        }

    }
});