
	this.sfx = function ( ) {

		this.__loadAudio = function ( __objData )  

		{

			this.__objData = __objData;

			this.__snd = this.__objData.sound;
			this.__soundID = this.__objData.soundID;
			this.__soundData = this.__objData.soundData;

			if ( typeof ( this.__objData ) !== 'object' ) { return console.error ( 'ERROR :: { Please ensure you are using an `object` for `objectData` & try again } !' ); }

			console.error ( 'Loaded Sound ID' + ' :: ' + this.__soundID );
			console.error ( 'Loaded Sound Data' + ' :: ' + JSON.stringify ( this.__soundData ) );

			this.__sound = this.__snd.add ( this.__soundID, this.__soundData );

			return {

				sounds : {

					sound: this.__sound, 
					soundID : this.__soundID, 
					soundData : this.__soundData, 

				}, 

			};

		}

		this.__playAudio = function ( __objData )

		{

			this.__objData = __objData;

			this.__scene = this.__objData.scene;
			this.__record = this.__objData.record;
			this.__sound = this.__objData.sound;
			this.__currentSound = this.__objData.currentSound;

			if ( typeof ( this.__objData ) !== 'object' ) { return console.error ( 'ERROR :: { Please ensure you are using an `object` for `objectData` & try again } !' ); }

			if ( typeof ( this.__record ) !== 'undefined' ) {

				// `this` is the scene

				this.__currentSound = this.__sound.add ( this.__record.key, this.__record.config );
				this.__currentSound.play ( );

			}

			else {

				console.error (
					'ERROR' + ' ' + '::' + ' ' + 
					'\r\n\r\n' + 
						'{' + 
							'\r\n' + 
							'\t\'this.__record\'' + ' ' + 'is' + ' ' + '\'' + this.__record + '\'' + ' ' + '&' + ' ' + 'does not exist!' + '\r\n' + 
							'\tPlease correct' + ' ' + '\'' + this.__record + '\'' + ' ' + 'Array' + ' ' + '\'' + 'index' + ' ' + 'value' + '\'' + ' ' + '& try again!' + 
							'\r\n' + 
						'}' + 
					'\r\n\r\n'
				);

			}

		}

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


