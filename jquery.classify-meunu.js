/** This plugin classify items based on a menu selection
 * @author: Moises Samuel Urias Moreno on 16/06/16
 * @version: 1.0*/

$(function(){
   console.log("Se ha cargado el pluggin");
    var classificationAll = 'all'; //This is the name of the classification of "ALL" categories visible.
    var activeMenu = true; //If it's true, there will be added an 'active' class to the selected item of the menu.

    var activeMenuClassName = 'active'; //This is the name of the class that it's added to the menu
                                        // change this if you want another name for the 'active' class.


    /*Here we select the menu container*/
    //CLASSIFY MENU
    $('#menu-de-clasificacion-de-productos div').click(function(){
        var classificationSelected = $(this).data("classification");
        console.log(classificationSelected); //Comment this line to avoid impression in the console

        /*Here we add the 'active' class to the menu if the variable 'activeMenu' is true */
        if(activeMenu == true){
            /*First we look every element of the menu*/
            $('#menu-de-clasificacion-de-productos div').each(
                function(){

                    /*Next we compare the data-classification to the classification selected*/
                    if ($(this).data("classification") == classificationSelected){

                        /*If it doesn't have the class 'active' we add it*/
                        if(!$(this).hasClass('active')){
                            $(this).addClass('active');
                        }
                    }
                    else{
                        /*If it doesn't have the class 'active' we add it*/
                        if($(this).hasClass('active')){
                            $(this).removeClass('active');
                        }
                    }
                }
            )
        }

        /*After the user has selected an option, we proceed to classify elements*/
        /*First we visit every item of the list*/
        //MENU ITEMS
        $('#lista-de-productos .item-category').each(
            function () {

                /*If the element have the category, it will become visible by adding the class with the propertiy of
                 * 'display: none !important'. This class is 'classify-display-none'*/
                if ($(this).data('classificationCategory') == classificationSelected){

                    if($(this).hasClass('classify-display-none')){
                        $(this).removeClass('classify-display-none');
                    }
                }

                /*If the element doesn't have the category, it will become invisible by adding a class with the property
                 *  of 'display: none !important'. This class is 'classify-display-none'*/
                if ($(this).data('classificationCategory') !== classificationSelected){

                    if(!$(this).hasClass('classify-display-none')){
                        $(this).addClass('classify-display-none');
                    }
                }

                if (classificationSelected === classificationAll){

                    if($(this).hasClass('classify-display-none')){
                        $(this).removeClass('classify-display-none');
                    }
                }
            }
        );


        /*Add here all the functions that you want to call after the classifying has finish*/
        
    });

});