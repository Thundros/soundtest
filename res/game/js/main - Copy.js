
	this.__preload = function ( ) {

		this.__load = this.load;
		this.__music = __music;
		this.__sfx = __sfx;

		this.__load.audio ( this.__music );
		this.__load.audio ( this.__sfx );

		this.__container = document.createElement ( 'div' );
		document.body.appendChild ( this.__container );

		this.__stats = new Stats ( );
		this.__stats.domElement.style.position = 'absolute';
		this.__stats.domElement.style.top = '75px';
		this.__container.appendChild ( this.__stats.domElement );

	}

	this.__create = function ( ) {

		this.__scene = this;
		this.__record = __music [ 4 ];
		this.__sound = this.sound;
		this.__currentSound = this.currentSound;

		__switchAudio ({
			scene : this.__scene, 
			record : this.__record, 
			sound : this.__sound, 
			currentSound : this.__currentSound, 
		});

	}

	this.__update = function ( ) {

		this.__stats.update ( );

	}

	this.__game = new Phaser.Game ({

		scene : {

			preload : this.__preload, 
			create : this.__create, 
			update : this.__update

		}

	});


