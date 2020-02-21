
	this.sfx = function ( ) {

		this.__currentSound = null;

		this.__music = 

		[

			{
				key : 'bgMusic', 
				url : 'assets/TownTheme.mp3', 
				config : {
					volume : 0.1, 
					loop : true, 
				}
			}, 

			{

				key : 'lvl1Music', 
				url : 'assets/TownTheme2.mp3', 
				config : {
					volume : 0.1, 
					loop : true, 
				}
			}, 

			{

				key : 'lvl1MusicA', 
				url : 'assets/bgm/lvl-1/SMILE.mp3', 
				config : {
					volume : 0.03, 
					loop : true, 
				}
			}, 

			{

				key : 'lvl2Music', 
				url : 'assets/bgm/lvl-1/smb-overworld-remix.mp3', 
				config : {
					volume : 0.1, 
					loop : true, 
				}
			}
		];

		this.__sfx = 

		[

			{

				key : 'jumpA', 
				url : 'assets/bgm/lvl-1/SMILE.mp3', 
				config : {
					volume : 0.1, 
					loop : true, 
				}

			}

		];

		this.__switchAudio = function ( __objData ) {

			this.__objData = __objData;

			this.__scene = this.__objData.scene;
			this.__record = this.__objData.record;
			this.__sound = this.__objData.sound;
			this.__currentSound = this.__objData.currentSound;

			if ( typeof ( this.__record ) !== 'undefined' ) {

				// `this` is the scene

				if ( this.__currentSound ) {
					this.__currentSound.stop ( );
					this.__sound.remove ( this.__currentSound );
				}

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

	}


