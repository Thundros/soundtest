
	this.sfx = function ( )

	{

		this.__loadAudio = function ( __objData )

		{

			this.__objData = __objData;

			this.__load = this.__objData.load;
			this.__music = this.__objData.music;

			if ( typeof ( this.__objData ) !== 'object' ) { return console.error ( 'ERROR :: { Please ensure you are using an `object` for `objectData` & try again } !' ); }

			this.__load.audio ( this.__music );

		}

		this.__addAudio = function ( __objData )  

		{

			this.__objData = __objData;

			this.__snd = this.__objData.sound;
			this.__key = this.__objData.key;
			this.__config = this.__objData.config;

			if ( typeof ( this.__objData ) !== 'object' ) { return console.error ( 'ERROR :: { Please ensure you are using an `object` for `objectData` & try again } !' ); }

			this.__currentSound = this.__snd.add ( this.__key, this.__config );

			return this.__currentSound;

		}

		this.__playAudio = function ( __objData )

		{

			this.__objData = __objData;

			this.__scene = this.__objData.scene;
			this.__sound = this.__objData.sound;
			this.__record = this.__objData.record;

			if ( typeof ( this.__objData ) !== 'object' ) { return console.error ( 'ERROR :: { Please ensure you are using an `object` for `objectData` & try again } !' ); }

			if ( typeof ( this.__record ) !== 'undefined' ) {

				this.__snd = this.__addAudio ({
					sound : this.__sound, 
					key : this.__record.key, 
					config : this.__record.config, 
				});

				this.__snd.play ( );

			}

			else {

				console.error (
					'ERROR' + ' ' + '{' + ' ' + '\'' + 'this.__playAudio ( )' + '\'' + ' ' + '}' + ' :: ' + ' ' + 
					'\r\n\r\n' + 
						'{' + '\r\n' + 
							'\r\n' + 
							'\t\'this.__record\'' + ' ' + 'is' + ' ' + '\'' + this.__record + '\'' + ' ' + '&' + ' ' + 'does not exist!' + '\r\n' + 
							'\tPlease correct' + ' ' + '\'' + this.__record + '\'' + ' ' + 'Array' + ' ' + '\'' + 'index' + ' ' + 'value' + '\'' + ' ' + '& try again!' + '\r\n\r\n' + 
							'\tFunction Exited Successfully!' + '\r\n' + 
							'\r\n' + 
						'}' + 
					'\r\n\r\n'
				);

			}

		}

		this.__stopAudio = function ( __objData )

		{

			this.__objData = __objData;

			this.__currentSound = this.__objData.currentSound;
			this.__currentSound.stop ( );

		}

		this.__destroyAudio = function ( __objData )

		{

			this.__objData = __objData;

			this.__sound = this.__objData.sound;
			this.__currentSound = __currentSound;

			this.__sound.remove ( __currentSound );

		}

		this.__switchAudio = function ( __objData )

		{

			this.__objData = __objData;

			this.__scene = this.__objData.scene;
			this.__sound = this.__objData.sound;
			this.__record = this.__objData.record;

			if ( __currentSound ) {
				this.__stopAudio ({
					currentSound : __currentSound, 
				});
				this.__destroyAudio ({
					sound : this.__sound, 
					currentSound : __currentSound, 
				});
			}

			if ( typeof ( this.__record ) !== 'undefined' ) {

				__currentSound = this.__addAudio ({
					sound : this.__sound, 
					key : this.__record.key, 
					config : this.__record.config, 
				});

				__currentSound = this.__sound.add ( this.__record.key, this.__record.config );
				__currentSound.play ( );

			}

			else {

				console.error (
					'ERROR' + ' ' + '{' + ' ' + '\'' + 'this.__nextTrack ( )' + '\'' + ' ' + '}' + ' :: ' + ' ' + 
					'\r\n\r\n' + 
						'{' + '\r\n' + 
							'\r\n' + 
							'\t\'this.__record\'' + ' ' + 'is' + ' ' + '\'' + this.__record + '\'' + ' ' + '&' + ' ' + 'does not exist!' + '\r\n' + 
							'\tPlease correct' + ' ' + '\'' + this.__record + '\'' + ' ' + 'Array' + ' ' + '\'' + 'index' + ' ' + 'value' + '\'' + ' ' + '& try again!' + '\r\n\r\n' + 
							'\tFunction Exited Successfully!' + '\r\n' + 
							'\r\n' + 
						'}' + 
					'\r\n\r\n'
				);

			}

		}

	}


