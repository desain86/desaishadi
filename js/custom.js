//[Custom Javascript]

//Project:	Wedding - Onepage Html Responsive Template
//Version:	1.1
//Primary use:	Wedding - Onepage Html Responsive Template 

//add your script here

    /* https://learn.jquery.com/using-jquery-core/document-ready/ */
    jQuery(document).ready(function() {
 
        /* initialize the slider based on the Slider's ID attribute */
        jQuery('#rev_slider_1').show().revolution({
 
            /* options are 'auto', 'fullwidth' or 'fullscreen' */
            sliderLayout: 'fullscreen',

            delay: 3400,

            autoHeight: 'on',

            disableProgressBar:"on",

            sliderType: 'carousel',
 
		    carousel: {
		 
		        maxVisibleItems: 5,
		        space: -290,
		        infinity: 'on',
		        stretch: 'off',
		 		speed: 1500,
		        
		        horizontal_align: 'center',
		 
		        fadeout: 'on',
		        vary_fade: 'on',
		 
		        vary_rotation: 'off',
		        maxRotation: 180,
		 
		        vary_scale: 'off',
		        minScale: 22
		 
		    },

		    navigation: {
 
    			keyboardNavigation: 'on',
    			keyboard_direction: 'horizontal',
    			mouseScrollNavigation: 'on',
    			mouseScrollReverse: 'reverse',
    			onHoverStop: 'off',

    			arrows: {
			 
			        enable: true,
			        style: 'uranus',
			        tmp: '',
			        rtl: false,
			        hide_onleave: false,
			        hide_onmobile: true,
			        hide_under: 0,
			        hide_over: 9999,
			        hide_delay: 200,
			        hide_delay_mobile: 1200,
			 
			        left: {
			            container: 'slider',
			            h_align: 'left',
			            v_align: 'center',
			            h_offset: 20,
			            v_offset: 0
			        },
			 
			        right: {
			            container: 'slider',
			            h_align: 'right',
			            v_align: 'center',
			            h_offset: 20,
			            v_offset: 0
			        }
			 
			    }
 
			},
 

        });
    });