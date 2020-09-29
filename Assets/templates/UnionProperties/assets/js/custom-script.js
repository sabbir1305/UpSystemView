$(document).ready(function() {


    var lis = $(".dropdown-content ul li");
    for (var i = 0; i < lis.length; i += 3) {
        lis.slice(i, i + 3).wrapAll("<ul class='pl-3 pr-3'></ul>");
    }

    // $('.dropdown-content').each(function(){
    //     getWidth = $(this).width();
    //     $(this).css('left','-'+getWidth/2+'px');

    //     console.log("get width : ", getWidth);
    // });


    //sticky menu
    $(window).scroll(function() {
        var stickyNav = $('.navbar'),
            scroll = $(window).scrollTop();
        var stickyTollbar = $('.tool-bar'),
            scroll = $(window).scrollTop();
        var headerTag = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 40) {
            stickyNav.addClass('fixed');
            stickyTollbar.addClass('fixed');
            headerTag.addClass('fixed');
        } else {
            stickyNav.removeClass('fixed');
            stickyTollbar.removeClass('fixed');
            headerTag.removeClass('fixed');
        }
    });

    //favicon
    $.get("./favicon.php", function(data) {
        // $( ".result" ).html( data );
        //console.log('Get file data: ',data);
        $("head").append(data);
    });

    //menu active
    currentActivePage = $('body').attr('class');
    //console.log("Active page: ",currentActivePage);
    $('.navbar-nav .nav-item').removeClass('active');
    $('.navbar-nav .nav-item.' + currentActivePage).addClass('active');

    //mobile menu

    $('.mobile-menu-toggler').click(function() {
        $('.mobile-menu').toggleClass('active');
        if ($('.mobile-menu').hasClass('active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    });

    $('.mobile-dropdown').click(function() {
        //console.log('dropppp');
        //$('.dropdown-content-mobile').removeClass('active');
        $(this).find('.dropdown-content-mobile').toggleClass('active');
    });




    //pr gallery view
    $('.view-pr-gallery').click(function() {
        //console.log("text-click...");
        $('.pr-gallery').find('a img').click();
    });


    //back to top
    $(window).scroll(function() {
        function elementScrolled(elem) {
            var docViewTop = $(window).scrollTop();
            var docViewBottom = docViewTop + $(window).height();
            var elemTop = $(elem).offset().top;
            return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
        }

        if (elementScrolled('footer')) {
            $('.back-top').css("opacity", "1");
            $('.back-top').css("visibility", "visible");
        } else {
            $('.back-top').css("opacity", "0");
            $('.back-top').css("visibility", "hidden");
        }
    });

    //back to top click
    $(".back-top a").click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });


    //project-listing popup
    $('.project-block, .project-block .detail-view').click(function() {
        //console.log("active");
        $('.project-listing-block').addClass('active');
        $('body').addClass('no-scroll');

    });
    //close
    $('.project-listing-block .lnr-cross').click(function() {
        $('.project-listing-block').removeClass('active');
        $('body').removeClass('no-scroll');
    });


    //timeline extend
    getActiveTimeline = $('.up-timeline .owl-item.active.center .ttl').attr("data-timeline");
    //console.log("Active timeline: ",getActiveTimeline);
    $('.up-timeline .owl-item').click(function() {
        getActiveTimeline = $(this).find('.ttl').attr("data-timeline");
        //console.log("Active timeline: ",getActiveTimeline);

        $('.timeline-source').removeClass('active');
        $('[data-source = ' + getActiveTimeline + ']').addClass('active');
    });


    //bod popup 
    $('.bod .up-button').click(function() {
        //console.log("active");
        $('.bod-detail-block').addClass('active');
        $('body').addClass('no-scroll');

    });
    //close
    $('.bod-detail-block .lnr-cross').click(function() {
        $('.bod-detail-block').removeClass('active');
        $('body').removeClass('no-scroll');
    });



    //image gallery popup 
    $('.image-gallery .view-gallery').click(function() {
        //console.log("active");
        $('.bod-detail-block').addClass('active');
        $('body').addClass('no-scroll');

    });
    //close
    $('.bod-detail-block .lnr-cross').click(function() {
        $('.bod-detail-block').removeClass('active');
        $('body').removeClass('no-scroll');
    });


    //subsidiaries
    try {
        getActiveSubsidiaries = $('.subsidiaries .owl-item.active.center img').attr('data-source');
        //console.log("get active subs: ", getActiveSubsidiaries);
        $('.subsidiaries .owl-item').click(function() {
            $('.subs-items .items-description').removeClass('active');
            getActiveSubsidiaries = $(this).find('img').attr('data-source');
            //console.log("get active subs: ", getActiveSubsidiaries);
            $('[data-target = ' + getActiveSubsidiaries + ']').addClass('active');


        });
    } catch (error) {

    }


    //ir
    $('.annual-report').click(function() {
        $('.expand-block').addClass('d-none');
        $('.expand-block.annual-report-block').toggleClass('d-none');

        $('html, body').animate({
            scrollTop: $("#block-expand").offset().top
        }, 1000);
    });

    $('.financial-statement').click(function() {
        $('.expand-block').addClass('d-none');
        $('.expand-block.financial-statement-block').toggleClass('d-none');
        $('html, body').animate({
            scrollTop: $("#block-expand").offset().top
        }, 1000);
    });

    $('.key-figures').click(function() {
        $('.expand-block').addClass('d-none');
        $('.expand-block.key-figures-block').toggleClass('d-none');
        $('html, body').animate({
            scrollTop: $("#block-expand").offset().top
        }, 1000);
    });

    $('.earn-release').click(function() {
        $('.expand-block').addClass('d-none');
        $('.expand-block.earn-release-block').toggleClass('d-none');
        $('html, body').animate({
            scrollTop: $("#block-expand").offset().top
        }, 1000);
    });

    $('.business-perform').click(function() {
        $('.expand-block').addClass('d-none');
        $('.expand-block.business-perform-block').toggleClass('d-none');
        $('html, body').animate({
            scrollTop: $("#block-expand").offset().top
        }, 1000);
    });

    //ir expand close
    $('.expand-block .expand-close').click(function() {
        $('.expand-block').addClass('d-none');
        $('html, body').animate({
            scrollTop: $("#block-elements").offset().top
        }, 1000);
    });

    //ourstory timeline
    jQuery(function($) {
        $('.timeline-block').on('scroll', function() {
            if ($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
                console.log('end reached');
            }
        })
    });

    //video gallery
    $('.video-gallery .owl-carousel .item').click(function() {
        getTitle = $(this).find('.video-title').text();
        getImage = $(this).find('.video-image').attr('src');

        $('.video-popup-title').text(getTitle);
        $('.video-popup-img').attr('src', getImage);

        console.log("gettitle: ", getTitle);
        console.log("getimage: ", getImage);

    });


    //project home
    $('.cat-projects-anchor .up-action-button').click(function() {
        $('html, body').animate({
            scrollTop: $(".cat-projects-anchor").offset().top
        }, 1000);
        $('.cat-project-section').removeClass('d-none');

        $('.cat-project-section .project-title').text($(this).text());

    });
    $('.cat-project-section .expand-close h3').click(function() {
        $('html, body').animate({
            scrollTop: $(".project-category-intro").offset().top
        }, 1000);
        setTimeout(function() {
            $('.cat-project-section').toggleClass('d-none');
        }, 1000);
    });

    //enq-btn
    $('.enq-btn').click(function() {
        $('.enq-fm-block').addClass('slideInUp');
        $('.enq-fm-block').removeClass('slideOutDown');
        $('.enq-fm-block').toggleClass('d-none');
    });
    $('.enq-close').click(function() {
        $('.enq-fm-block').removeClass('slideInUp');
        $('.enq-fm-block').addClass('slideOutDown');
    });


    //Media center - Video gallery
    $('.section-video .pr-gallery-element-nav .slick-slide').click(function() {
        getImage = $('.slick-slide.slick-current.slick-active.slick-center .video-gallery-thumb').attr('src');
        console.log("Get image bg: ", getImage);

        $('.section-video .video-gallery-container').css("background-image", "linear-gradient(to right, black, #00000061),url(" + getImage + ")");


    });



});