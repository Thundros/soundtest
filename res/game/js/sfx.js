
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

		function __switchAudio(record) {
		  // `this` is the scene

		  if (currentSound) {
			currentSound.stop();
			this.sound.remove(currentSound);
		  }

		  currentSound = this.sound.add(record.key, record.config);
		  currentSound.play();
		}

	}


