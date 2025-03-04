
	this.__preload = function ( ) {

		this.__load = this.load;
		this.__sound = this.sound;
		this.__music = __music;

		this.sfx = new sfx ( );

		this.sfx.__loadAudio ({
			load : this.__load, 
			music : this.__music, 
		});

		this.__container = document.createElement ( 'div' );
		document.body.appendChild ( this.__container );

		this.__stats = new Stats ( );
		this.__stats.domElement.style.position = 'absolute';
		this.__stats.domElement.style.top = '75px';
		this.__container.appendChild ( this.__stats.domElement );

	}

	this.__create = function ( ) {

		/*

		// This plays the track without switching to another track

		this.sfx.__playAudio ({
			scene : this, 
			sound : this.sound, 
			record : __sfx [ 0 ], 
		});

		*/

		// This switches from track to new track

		this.sfx.__switchAudio({ 
			scene : this, 
			sound : this.sound, 
			record : __music [ 0 ], 
		});

		// This switches from track to new track

		this.sfx.__switchAudio({ 
			scene : this, 
			sound : this.sound, 
			record : __music [ 2 ], 
		});

	}

	this.__update = function ( ) {

		this.__stats.update ( );

		/*

		for ( let __i = 0; __i <= ( this.arrayLength ( this.__buttonText ) - 1 ); __i++ ) {

			this.__button [ __i ].UpdateButton (

				this.__fadeInMenu ( ).__buttonAlpha [ __i ], 
				this.__fadeInMenu ( ).__buttonAlphaLevel [ __i ], 
				this.__fadeInMenu ( ).__buttonAlphaDuration [ __i ]

			);

		}

		*/

	}

	this.__game = new Phaser.Game ({

		scene : {

			preload : this.__preload, 
			create : this.__create, 
			update : this.__update

		}

	});


