
	this.sfx = function ( ) {

		this.__loadAudio = function ( __objData ) {

			this.__objData = __objData;

			this.__snd = this.__objData.sound;
			this.__soundID = this.__objData.soundID;
			this.__soundData = this.__objData.soundData;

			if ( typeof ( this.__objData ) !== 'object' ) { return console.error ( 'ERROR :: { Please ensure you are using an `object` for `objectData` & try again } !' ); }

			console.error ( 'Loaded Sound ID' + ' :: ' + this.__soundID );
			console.error ( 'Loaded Sound Data' + ' :: ' + JSON.stringify ( this.__soundData ) );

			this.__sound = this.__snd.loadAudio ( this.__soundID, this.__soundData );

			return {

				sounds : {

					sound : this.__sound, 
					soundID : this.__soundID, 
					soundData : this.__soundData, 

				}, 

			};

		}

		this.__addAudio = function ( __objData )  

		{

			this.__objData = __objData;

			this.__snd = this.__objData.sound;
			this.__record = this.__objData.record;
			this.__key = this.__record.key;
			this.__config = this.__record.config;

			if ( typeof ( this.__objData ) !== 'object' ) { return console.error ( 'ERROR :: { Please ensure you are using an `object` for `objectData` & try again } !' ); }

			if ( typeof ( this.__record ) !== 'undefined' ) {

				this.__currentSound = this.__snd.add ( this.__key, this.__config );

			}

			else {

				console.error (
					'ERROR' + ' ' + '{' + ' ' + '\'' + 'this.__addAudio ( )' + '\'' + ' ' + '}' + ' :: ' + ' ' + 
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

				__currentSound.play ( );

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

		this.__stopAudio = function ( __objData ) {

			this.__objData = __objData;

			this.__currentSound = this.__objData.currentSound;

			if ( this.__currentSound ) {
				this.__currentSound.stop ( );
			}

		}

		this.__destroyAudio = function ( __objData ) {

			this.__objData = __objData;

			this.__sound = this.__objData.sound;
			this.__currentSound = this.__objData.currentSound;

			if ( this.__currentSound ) {
				this.__sound.remove ( this.__currentSound );
			}

		}

		this.__nextTrack = function ( __objData ) {

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
					record : this.__record, 
					key : this.__record.key, 
					config : this.__record.config, 
				});

				this.__playAudio ({
					scene : this.__scene, 
					sound : this.__sound, 
					record : this.__record, 
				});

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

				return;

			}

		}

	}


