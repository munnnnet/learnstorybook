---
title: 'Newsly Homepage Basic'
tocTitle: 'Homepage Basic'
description: 'This is a homepage basic in Newsly. These elements will be update in the next stage.'
---

Newsly is beauty blogger template. This is the beta version where everyone easy to development to next layout. Newsly created using bootstrap 4 and responsive column and card. Compatible with various device screen size.


## Head CSS and JS Sources

```html
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Newsly</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Comfortaa:400,500,600,700">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="assets/css/Featured---Blog.css">
    <link rel="stylesheet" href="assets/css/footer-dark-01.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
    <link rel="stylesheet" href="assets/css/Navigation-Clean.css">
    <link rel="stylesheet" href="assets/css/styles.css">
</head>

```


## Navigation

```html
<!-- Start: Navigation Clean -->
    <nav class="navbar navbar-light navbar-expand-md sticky-top navigation-clean" style="background-color: #FED8C3;">
        <div class="container"><a class="navbar-brand" href="#" style="font-family: Comfortaa, cursive;letter-spacing: 1px;">Newsly</a><button data-toggle="collapse" class="navbar-toggler" data-target="#navcol-1" style="color: rgb(0,0,0);"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div
                class="collapse navbar-collapse" id="navcol-1">
                <ul class="nav navbar-nav ml-auto">
                    <li class="nav-item" role="presentation" style="font-family: Comfortaa, cursive;letter-spacing: 0.5px;font-weight: 500;"><a class="nav-link" data-bs-hover-animate="rubberBand" href="#stories">Stories</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" data-bs-hover-animate="rubberBand" href="#articles" style="font-family: Comfortaa, cursive;font-weight: 500;letter-spacing: 0.5px;">Articles</a></li>
                    <li class="nav-item" role="presentation"></li>
                    <li class="nav-item" role="presentation"><a class="nav-link" data-bs-hover-animate="rubberBand" href="#interview" style="font-family: Comfortaa, cursive;font-weight: 500;letter-spacing: 0.5px;">Interview</a></li>
                </ul>
        </div>
        </div>
    </nav>
<!-- End: Navigation Clean -->
```


## Header

```html
<div style="background-color: #fcf2ed;">
        <section>
            <div class="row" style="margin-right: 0px;margin-left: 0px;">
                <div class="col-md-6" style="padding-right: 0px;padding-left: 0px;">
                    <div style="padding: 10%;">
                        <h2 class="text-capitalize max-2-lines" style="font-weight: 700;letter-spacing: 1px;line-height: 45px;margin-bottom: 10px;font-family: Montserrat, sans-serif;"><strong>Always layer your skin-care products from thinnest to thickest texture.</strong></h2>
                        <div class="row" style="margin-bottom: 10%;">
                            <div class="col-sm-12 col-md-12 col-lg-6"><span style="font-weight: 600;">Category:&nbsp;</span><a href="#" style="color: #F96C7F;margin-right: 5px;">Beauty,</a><a href="#" style="color: #F96C7F;margin-right: 10px;">Skincare</a></div>
                            <div class="col-sm-12 col-md-12 col-lg-6"><span style="font-weight: 600;margin-right: 5px;">Published on:</span><span>Aug 28, 2020</span></div>
                        </div>
                        <p class="max-2-lines" style="font-family: Comfortaa, cursive;letter-spacing: 0.5px;margin-bottom: 15%;">If you think about your skin as if it were a sponge, you want it to soak up all the good stuff you're applying to your face and body. Therefore, it's important to layer properly. </p><a class="btn btn-primary btn-lg after-arrow"
                            role="button" data-bs-hover-animate="pulse" style="background-color: #F96C7F;padding: 10px 20px;color: rgb(255,255,255);font-family: Comfortaa, cursive;letter-spacing: 1.5px;font-weight: 700;border: none;">Read more</a></div>
                </div>
                <div class="col-md-6" style="padding-right: 0px;padding-left: 0px;"><img src="assets/img/newsly.jpg" width="100%"></div>
            </div>
        </section>
    </div>
```

## Article listing

```html
<div id="stories" style="padding: 10%;padding-right: 0px;padding-left: 0px;">
        <section>
            <h2 class="text-capitalize text-center after-line-below" style="font-family: Montserrat, sans-serif;font-weight: 700;letter-spacing: 1px;">Explore beauty Stories</h2>
            <div class="row" style="margin-left: 0px;margin-right: 0px;margin-top: 8%;">
                <!-- Start: left -->
                <div class="col-md-6" style="padding-top: 15px;padding-bottom: 15px;">
                    <!-- Start: Content box -->
                    <div class="row" style="margin-right: 0px;margin-left: 0px;">
                        <!-- Start: Content -->
                        <div class="col-md-6" style="padding-right: 0px;padding-left: 0px;">
                            <div style="padding: 5%;">
                                <h5 class="text-capitalize max-2-lines" style="font-weight: 700;letter-spacing: 1px;margin-bottom: 5px;font-family: Montserrat, sans-serif;line-height: 33px;"><strong>Keep your eye cream and nail polish in the fridge.</strong><br></h5>
                                <!-- Start: category -->
                                <div><span style="font-weight: 600;font-size: 0.8em;">Category:&nbsp;</span><a href="#" style="color: #F96C7F;margin-right: 5px;font-size: 0.8em;">Beauty,</a><a href="#" style="color: #F96C7F;margin-right: 10px;font-size: 0.8em;">Skincare</a></div>
                                <!-- End: category -->
                                <!-- Start: published -->
                                <div><span style="font-weight: 600;margin-right: 5px;font-size: 0.8em;">Published on:</span><span style="font-size: 0.8em;">Aug 28, 2020</span></div>
                                <!-- End: published -->
                                <p class="max-2-lines" style="font-family: Comfortaa, cursive;margin-bottom: 10%;margin-top: 5%;font-size: 0.9em;line-height: 23px;">The reason some eye creams are sold in tubes with metal tips is that the metal helps deflate puffy areas by cooling the skin, which theoretically constricts blood vessels. </p><a class="btn btn-primary btn-sm after-arrow"
                                    role="button" data-bs-hover-animate="pulse" style="background-color: #F96C7F;padding: 10px 20px;color: rgb(255,255,255);font-family: Comfortaa, cursive;letter-spacing: 1.5px;font-weight: 700;border: none;">Read more</a></div>
                        </div>
                        <!-- End: Content -->
                        <!-- Start: Image -->
                        <div class="col-md-6" style="padding-right: 0px;padding-left: 0px;"><img src="assets/img/newsly-1.jpg" width="100%"></div>
                        <!-- End: Image -->
                    </div>
                    <!-- End: Content box -->
                </div>
                <!-- End: left -->
                <!-- Start: right -->
                <div class="col-md-6" style="padding-top: 15px;padding-bottom: 15px;">
                    <!-- Start: Content box -->
                    <div class="row" style="margin-right: 0px;margin-left: 0px;">
                        <!-- Start: Image -->
                        <div class="col-md-6" style="padding-right: 0px;padding-left: 0px;"><img src="assets/img/newsly-2.jpg" width="100%"></div>
                        <!-- End: Image -->
                        <!-- Start: Content -->
                        <div class="col-md-6" style="padding-right: 0px;padding-left: 0px;">
                            <div style="padding: 5%;">
                                <h5 class="text-capitalize max-2-lines" style="font-weight: 700;letter-spacing: 1px;margin-bottom: 5px;font-family: Montserrat, sans-serif;line-height: 33px;"><strong>Don't touch your face unless you have to. Your hands are GRUBBY.</strong><br></h5>
                                <div><span style="font-weight: 600;font-size: 0.8em;">Category:&nbsp;</span><a href="#" style="color: #F96C7F;margin-right: 5px;font-size: 0.8em;">Beauty,</a><a href="#" style="color: #F96C7F;margin-right: 10px;font-size: 0.8em;">Facial</a></div>
                                <div><span style="font-weight: 600;margin-right: 5px;font-size: 0.8em;">Published on:</span><span style="font-size: 0.8em;">Aug 28, 2020</span></div>
                                <p class="max-2-lines" style="font-family: Comfortaa, cursive;margin-bottom: 10%;margin-top: 5%;font-size: 0.9em;line-height: 23px;">As someone who is oddly scared of others touching my face, perhaps I take this tip a bit too seriously. But your hands are REALLY dirty. </p><a class="btn btn-primary btn-sm after-arrow" role="button" data-bs-hover-animate="pulse"
                                    style="background-color: #F96C7F;padding: 10px 20px;color: rgb(255,255,255);font-family: Comfortaa, cursive;letter-spacing: 1.5px;font-weight: 700;border: none;">Read more</a></div>
                        </div>
                        <!-- End: Content -->
                    </div>
                    <!-- End: Content box -->
                </div>
                <!-- End: right -->
            </div>
        </section>
    </div>
```

## Article card

```html
<div id="articles" style="padding: 10%;padding-right: 0px;padding-left: 0px;background-color: #fcf2ed;">
        <section>
            <h2 class="text-capitalize text-center after-line-below" style="font-family: Montserrat, sans-serif;font-weight: 700;letter-spacing: 1px;"><strong>Popular beauty articles</strong></h2>
            <div class="card-group" style="border: none;padding: 5%;">
                <!-- Start: 01 -->
                <div class="card" style="border: none;margin: 5px;"><img class="card-img-top w-100 d-block" src="assets/img/newsly-3.jpg">
                    <div class="card-body">
                        <h4 class="text-capitalize card-title max-2-lines" style="line-height: 28px;letter-spacing: 1px;font-weight: 700;font-family: Montserrat, sans-serif;margin-bottom: 5px;font-size: 1.2em;"><strong>The best defense against oily skin is an offense of face oils.</strong></h4>
                        <!-- Start: category -->
                        <div><span style="font-weight: 600;font-size: 0.8em;">Category:&nbsp;</span><a href="#" style="color: #F96C7F;margin-right: 5px;font-size: 0.8em;">Beauty,</a><a href="#" style="color: #F96C7F;margin-right: 10px;font-size: 0.8em;">Skincare</a></div>
                        <!-- End: category -->
                        <!-- Start: published -->
                        <div><span style="font-weight: 600;margin-right: 5px;font-size: 0.8em;">Published on:</span><span style="font-size: 0.8em;">Aug 28, 2020</span></div>
                        <!-- End: published --><a class="btn btn-primary btn-sm after-arrow" role="button" data-bs-hover-animate="pulse" style="background-color: #F96C7F;padding: 10px 20px;color: rgb(255,255,255);font-family: Comfortaa, cursive;letter-spacing: 1.5px;font-weight: 700;border: none;margin-top: 30px;">Read more</a></div>
                </div>
                <!-- End: 01 -->
                <!-- Start: 02 -->
                <div class="card" style="border: none;margin: 5px;"><img class="card-img-top w-100 d-block" src="assets/img/newsly-4.jpg">
                    <div class="card-body">
                        <h4 class="text-capitalize card-title max-2-lines" style="line-height: 28px;letter-spacing: 1px;font-weight: 700;font-family: Montserrat, sans-serif;margin-bottom: 5px;font-size: 1.2em;"><strong>Don't ever leave home without a Beautyblender</strong><br></h4>
                        <!-- Start: category -->
                        <div><span style="font-weight: 600;font-size: 0.8em;">Category:&nbsp;</span><a href="#" style="color: #F96C7F;margin-right: 5px;font-size: 0.8em;">Beauty,</a><a href="#" style="color: #F96C7F;margin-right: 10px;font-size: 0.8em;">Skincare</a></div>
                        <!-- End: category -->
                        <!-- Start: published -->
                        <div><span style="font-weight: 600;margin-right: 5px;font-size: 0.8em;">Published on:</span><span style="font-size: 0.8em;">Aug 28, 2020</span></div>
                        <!-- End: published --><a class="btn btn-primary btn-sm after-arrow" role="button" data-bs-hover-animate="pulse" style="background-color: #F96C7F;padding: 10px 20px;color: rgb(255,255,255);font-family: Comfortaa, cursive;letter-spacing: 1.5px;font-weight: 700;border: none;margin-top: 30px;">Read more</a></div>
                </div>
                <!-- End: 02 -->
                <!-- Start: 03 -->
                <div class="card" style="border: none;margin: 5px;"><img class="card-img-top w-100 d-block" src="assets/img/newsly-5.jpg">
                    <div class="card-body">
                        <h4 class="text-capitalize card-title max-2-lines" style="line-height: 28px;letter-spacing: 1px;font-weight: 700;font-family: Montserrat, sans-serif;margin-bottom: 5px;font-size: 1.2em;"><strong>Coat your hair in conditioner before a swim at the beach or the pool.</strong><br></h4>
                        <!-- Start: category -->
                        <div><span style="font-weight: 600;font-size: 0.8em;">Category:&nbsp;</span><a href="#" style="color: #F96C7F;margin-right: 5px;font-size: 0.8em;">Beauty,</a><a href="#" style="color: #F96C7F;margin-right: 10px;font-size: 0.8em;">Skincare</a></div>
                        <!-- End: category -->
                        <!-- Start: published -->
                        <div><span style="font-weight: 600;margin-right: 5px;font-size: 0.8em;">Published on:</span><span style="font-size: 0.8em;">Aug 28, 2020</span></div>
                        <!-- End: published --><a class="btn btn-primary btn-sm after-arrow" role="button" data-bs-hover-animate="pulse" style="background-color: #F96C7F;padding: 10px 20px;color: rgb(255,255,255);font-family: Comfortaa, cursive;letter-spacing: 1.5px;font-weight: 700;border: none;margin-top: 30px;">Read more</a></div>
                </div>
                <!-- End: 03 -->
            </div>
        </section>
    </div>
```

## Video expert interview

```html
<div id="interview" style="background-color: #ffffff;padding: 10%;padding-right: 0px;padding-left: 0px;padding-bottom: 0px;">
        <section>
            <h2 class="text-capitalize text-center after-line-below" style="font-family: Montserrat, sans-serif;font-weight: 700;letter-spacing: 1px;"><strong>Exclusive interview from the Experts</strong><br></h2>
            <div class="row" style="margin-right: 0px;margin-left: 0px;padding: 5%;padding-bottom: 0px;">
                <div class="col-md-6" style="padding-right: 0px;padding-left: 0px;"><img src="assets/img/newsly-6.png" width="100%"></div>
                <div class="col-md-6" style="padding-right: 0px;padding-left: 0px;">
                    <div style="padding: 10%;">
                        <h2 class="text-capitalize max-2-lines" style="font-weight: 700;letter-spacing: 1px;line-height: 45px;margin-bottom: 10px;font-family: Montserrat, sans-serif;"><strong>Tips to Get Glowing Skin, According to Skincare Experts</strong><br></h2>
                        <div><span style="font-weight: 600;margin-right: 5px;">Published on:</span><span>Aug 28, 2020</span></div>
                        <div><span style="font-weight: 600;">Category:&nbsp;</span><a href="#" style="color: #F96C7F;margin-right: 5px;">Beauty,</a><a href="#" style="color: #F96C7F;margin-right: 10px;">Skincare</a></div>
                        <p class="max-2-lines" style="font-family: Comfortaa, cursive;letter-spacing: 0.5px;margin-bottom: 15%;margin-top: 10%;">If you think about your skin as if it were a sponge, you want it to soak up all the good stuff you're applying to your face and body. Therefore, it's important to layer properly. </p><a class="btn btn-primary btn-lg" role="button"
                            data-bs-hover-animate="pulse" style="background-color: #F96C7F;padding: 10px 20px;color: rgb(255,255,255);font-family: Comfortaa, cursive;letter-spacing: 1.5px;font-weight: 700;border: none;"><i class="fa fa-play" style="margin-right: 10px;"></i>Watch</a></div>
                </div>
            </div>
        </section>
    </div>
```

## Footer

```html
    <div class="footer-dark" style="background-color: #FED8C3;">
        <footer>
            <div class="container">
                <div class="row">
                    <!-- Start: About -->
                    <div class="col-sm-6 col-md-3 item" style="color: rgb(0,0,0);"><a class="navbar-brand text-capitalize" href="#" style="font-family: Comfortaa, cursive;font-weight: 600;letter-spacing: 3px;color: rgb(0,0,0);margin-bottom: 5%;">about</a>
                        <ul>
                            <li class="text-capitalize" style="font-family: Comfortaa, cursive;letter-spacing: 2px;margin-bottom: 5%;"><a href="#" style="font-weight: 500;">service</a></li>
                            <li style="margin-bottom: 5%;"><a class="text-capitalize" href="#" style="font-family: Comfortaa, cursive;letter-spacing: 2px;">workshop</a></li>
                            <li><a class="text-capitalize" href="#" style="font-family: Roboto, sans-serif;letter-spacing: 2px;">introduction</a></li>
                        </ul>
                    </div>
                    <!-- End: About -->
                    <!-- Start: Footer Text -->
                    <div class="col-md-6 item text"><a class="navbar-brand text-capitalize" href="#" style="font-family: Comfortaa, cursive;font-weight: 600;letter-spacing: 3px;color: rgb(0,0,0);margin-bottom: 5%;">Newsly</a>
                        <p style="font-family: Comfortaa, cursive;letter-spacing: 0.5px;font-size: 18px;font-weight: 300;padding-bottom: 5%;color: rgb(0,0,0);">I am a person who invents, produces, or makes things is called a&nbsp;<strong>creator</strong>. If you are an author, you are the&nbsp;<strong>creator</strong>&nbsp;of the characters in your books.</p>
                    </div>
                    <!-- End: Footer Text -->
                    <!-- Start: Social Icons -->
                    <div class="col item social"><a href="#" style="color: rgb(255,255,255);background-color: #000000;"><i class="icon ion-social-facebook" style="color: rgb(255,255,255);"></i></a><a href="#" style="color: rgb(0,0,0);background-color: #000000;"><i class="icon ion-social-twitter" style="color: rgb(255,255,255);"></i></a>
                        <a
                            href="#" style="background-color: #000000;"><i class="icon ion-social-instagram" style="color: rgb(255,255,255);"></i></a>
                    </div>
                    <!-- End: Social Icons -->
                </div>
                <!-- Start: Copyright -->
                <p class="copyright">Glovory © 2020</p>
                <!-- End: Copyright -->
            </div>
        </footer>
    </div>
```

## Additional script

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
    <script src="assets/js/bs-init.js"></script>
```
