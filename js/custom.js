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

            responsiveLevels: [1240, 1024, 778, 480],

            sliderType: 'carousel',
 
		    carousel: {
		 
		        maxVisibleItems: 5,
		        space: -295,
		        infinity: 'on',
		        stretch: 'off',
		 
		        border_radius: '10px',
		        horizontal_align: 'center',
		 
		        fadeout: 'on',
		        vary_fade: 'on',
		 
		        vary_rotation: 'off',
		        maxRotation: 0,
		 
		        vary_scale: 'off',
		        minScale: 22
		 
		    },
 

        });
    });