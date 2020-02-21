
	this.sfx = function ( ) {

		this.__switchAudio = function ( __objData ) {

			this.__objData = __objData;

			this.__scene = this.__objData.scene;
			this.__sound = this.__objData.sound;
			this.__record = this.__objData.record;
			this.__currentSound = this.__objData.currentSound;

			// `this` is the scene

			console.log ( this.__currentSound );

			if ( this.__currentSound ) {
				this.__currentSound.stop ( );
				this.__sound.remove ( this.__currentSound );
			}

			this.__currentSound = this.__sound.add ( this.__record.key, this.__record.config );
			this.__currentSound.play ( );

		}

	}


