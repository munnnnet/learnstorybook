---
title: 'Stevany Homepage Basic'
tocTitle: 'Homepage Basic'
description: 'This is a homepage basic in Stevany. These elements will be update in the next stage.'
---

Do you like Squarespace theme? This design comes from that. Stevany consist of responsive design, Squarespace color style, and easy to customize because created using Bootstrap 4. 


## Head CSS and JS Sources

```html
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <title>Stevany</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Average">
    <link rel="stylesheet" href="assets/css/styles.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/css/lightbox.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/css/swiper.min.css">
</head>

```


## Navigation

```html
<nav class="navbar navbar-light navbar-expand-md" style="height: 100px;background-color: #F2EEE3;">
        <div class="container-fluid"><button data-toggle="collapse" data-target="#navcol-2" class="navbar-toggler"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse d-xl-flex justify-content-xl-center"
                id="navcol-1">
                <ul class="nav navbar-nav">
                    <li class="nav-item" role="presentation"><a class="nav-link text-uppercase" href="#" style="font-weight: 600;letter-spacing: 2px;color: rgb(0,0,0);">Home</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link text-uppercase" href="#" style="font-weight: 600;letter-spacing: 2px;color: rgb(0,0,0);">About</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link text-uppercase" href="#" style="font-weight: 600;letter-spacing: 2px;color: rgb(0,0,0);">Services</a></li>
                </ul>
            </div><a class="navbar-brand text-uppercase" href="#" style="font-weight: 700;letter-spacing: 3px;font-family: Average, serif;">Stevany</a>
            <div class="collapse navbar-collapse d-xl-flex justify-content-xl-center" id="navcol-2">
                <ul class="nav navbar-nav">
                    <li class="nav-item" role="presentation"><a class="nav-link text-uppercase" href="#" style="font-weight: 600;letter-spacing: 2px;color: rgb(0,0,0);">Shop</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link text-uppercase" href="#" style="font-weight: 600;letter-spacing: 2px;color: rgb(0,0,0);">Blog</a></li>
                    <li class="nav-item" role="presentation"><a class="nav-link text-uppercase" href="#" style="font-weight: 600;letter-spacing: 2px;color: rgb(0,0,0);">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

```


## Header

```html
<header>
            <div class="row">
                <div class="col-md-6" style="padding: 5%;"><img class="d-xl-flex" src="assets/img/stevany-1.png" width="100%" style="background-color: #eb8c74;padding-top: 5%;"></div>
                <div class="col-md-6" style="padding: 0px;background-image: url(&quot;assets/img/stevany-2.jpg&quot;);background-position: center;background-size: cover;background-repeat: no-repeat;">
                    <div class="d-xl-flex justify-content-xl-center" style="margin-top: 50%;margin-bottom: 50%;">
                        <h2 class="text-center d-xl-flex" style="background-color: #FFFFFF;padding: 5%;font-family: Average, serif;letter-spacing: 1px;">Traditional than machines</h2>
                    </div>
                </div>
            </div>
        </header>

```

## Photo gallery

```html
<div class="photo-gallery" style="background-color: #F2EEE3;">
        <div class="container">
            <div class="mx-auto intro" style="padding-top: 5%;padding-bottom: 2%;">
                <h4 class="text-center mx-auto" style="font-family: Average, serif;letter-spacing: 1px;line-height: 34px;padding-top: 5%;padding-right: 5%;padding-bottom: 5%;padding-left: 5%;font-weight: 300;font-size: 1.5em;">Tell yourself that you are not poet enough to call forth its riches; for to the&nbsp;<strong>creator</strong>&nbsp;there is <strong>no poverty and no poor indifferent place.</strong></h4>
            </div>
            <div class="row photos">
                <div class="col-sm-12 col-md-4 col-lg-4 item"><a data-lightbox="photos" href="desk.jpg"><img class="img-fluid" src="assets/img/stevany-4.jpg"><div class="text-center" style="padding-top: 10%;padding-bottom: 10%;border-bottom: 1px solid #000000;color: rgb(0,0,0);"><h4 class="text-uppercase" style="color: rgb(0,0,0);letter-spacing: 2px;font-family: Average, serif;">Products</h4></div></a></div>
                <div
                    class="col-sm-12 col-md-4 col-lg-4 item"><a data-lightbox="photos" href="building.jpg"><img class="img-fluid" src="assets/img/stevany-5.jpg" style="padding-top: 15%;"><div class="text-center" style="padding-top: 10%;padding-bottom: 10%;border-bottom: 1px solid #000000;color: rgb(0,0,0);"><h4 class="text-uppercase" style="color: rgb(0,0,0);letter-spacing: 2px;font-family: Average, serif;">workshop</h4></div></a></div>
            <div
                class="col-sm-12 col-md-4 col-lg-4 item"><a data-lightbox="photos" href="loft.jpg"><img class="img-fluid" src="assets/img/stevany-3.jpg"><div class="text-center" style="padding-top: 10%;padding-bottom: 10%;border-bottom: 1px solid #000000;color: rgb(0,0,0);"><h4 class="text-uppercase" style="color: rgb(0,0,0);letter-spacing: 2px;font-family: Average, serif;">Course</h4></div></a></div>
            </div>
        </div>
    </div>
```

## Shop preview

```html
<div style="background-image: url(&quot;assets/img/stevany-9.jpg&quot;);background-position: center;background-size: cover;background-repeat: no-repeat;">
        <div class="products" style="padding-top: 5%;padding-right: 10%;padding-bottom: 5%;padding-left: 10%;">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-4 col-xl-4" style="margin-bottom: 5%;">
                    <div>
                        <h3 class="text-uppercase" style="font-family: Average, serif;letter-spacing: 2px;line-height: 47px;">Creates by hands</h3>
                        <p style="padding-bottom: 30px;">The ability to perceive the world in new ways, to find hidden patterns, to make connections between seemingly unrelated phenomena, and to generate solutions.</p>
                    </div><button class="btn btn-primary btn-lg text-uppercase border rounded-0 shadow-none" type="button" style="letter-spacing: 2px;background-color: #eb8c74;border: none !important;box-shadow: none !important;padding: 10px 20px;">Shop now</button></div>
                <div
                    class="col-md-12 col-lg-8 col-xl-8">
                    <div class="card-group">
                        <div class="card" style="border: none !important;padding: 5px;background-color: rgba(255,255,255,0);"><img class="card-img-top w-100 d-block" src="assets/img/stevany-6.jpg">
                            <div class="card-body">
                                <h5 class="text-capitalize text-center card-title" style="font-family: Average, serif;letter-spacing: 1px;">Floral workshop</h5>
                                <p class="text-center card-text" style="font-weight: 600;font-size: 20px;">$100.00</p>
                            </div>
                        </div>
                        <div class="card" style="border: none !important;padding: 5px;background-color: rgba(255,255,255,0);"><img class="card-img-top w-100 d-block" src="assets/img/stevany-7.jpg">
                            <div class="card-body">
                                <h5 class="text-capitalize text-center card-title" style="font-family: Average, serif;letter-spacing: 1px;">Large Handmade</h5>
                                <p class="text-center card-text" style="font-weight: 600;font-size: 20px;">$43.00</p>
                            </div>
                        </div>
                        <div class="card" style="border: none !important;padding: 5px;background-color: rgba(255,255,255,0);"><img class="card-img-top w-100 d-block" src="assets/img/stevany-8.jpg">
                            <div class="card-body">
                                <h5 class="text-capitalize text-center card-title" style="font-family: Average, serif;letter-spacing: 1px;">Peonis Ceramics</h5>
                                <p class="text-center card-text" style="font-weight: 600;font-size: 20px;">$13.00</p>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    </div>

```

## Workshop

```html
<div style="background-color: #E0DCD3;">
        <div class="container">
            <div class="row" style="padding: 5%;">
                <div class="col-md-3">
                    <div class="d-block" style="margin-top: 50%;padding: 10px;margin-bottom: 50%;">
                        <p class="text-center" style="font-family: Average, serif;font-size: 1.2em;">Women's Craft</p>
                        <h5 class="text-center">December 2020</h5>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="swiper-container">
                        <div class="swiper-wrapper">
                            <div class="swiper-slide" style="background-position: center;background-size: cover;background-repeat: no-repeat;"><img src="assets/img/stevany-10.jpg" width="100%"></div>
                            <div class="swiper-slide"><img src="assets/img/stevany-11.jpg" width="100%"></div>
                            <div class="swiper-slide"><img src="assets/img/stevany-12.jpg" width="100%"></div>
                        </div>
                        <div class="swiper-pagination"></div>
                        <div class="swiper-button-prev"></div>
                        <div class="swiper-button-next"></div>
                    </div><button class="btn btn-primary btn-lg text-uppercase border rounded-0 d-flex d-sm-flex d-md-flex d-lg-flex d-xl-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-center" type="button"
                        style="letter-spacing: 2px;background-color: #ED9E88;margin-top: 30px;margin-bottom: 30px;margin-left: auto;margin-right: auto;padding: 10px 20px;">Add on calendar</button></div>
                <div class="col-md-3">
                    <div class="d-block" style="margin-top: 50%;margin-bottom: 50%;">
                        <p class="text-center" style="font-family: Average, serif;font-size: 1.2em;">Craft Daily</p>
                        <h5 class="text-center">November 2020</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
```

## About

```html
<section style="background-color: #e9d1d1;">
        <div class="container" style="padding: 5%;">
            <div style="margin-bottom: 5%;"><span class="text-uppercase d-block" style="font-weight: 600;font-size: 1.2em;letter-spacing: 2px;padding-bottom: 10px;">About stevany</span>
                <h3 style="font-family: Average, serif;line-height: 45px;letter-spacing: 1px;">An studio that living with a&nbsp;<strong>mindset</strong>&nbsp;to think, feel and express self creatively, and consistently. It's a&nbsp;<strong>mindset</strong>&nbsp;that is open and not fixed or closed.</h3>
            </div>
            <div class="row">
                <div class="col-md-4"><img src="assets/img/stevany-13.jpg" width="100%"></div>
                <div class="col-md-8">
                    <div style="padding-top: 5%;border-top: 1px solid #000000;">
                        <p style="line-height: 35px;font-size: 1.2em;margin-bottom: 5%;">Your mindset plays a huge role in how you live your life and how you cope with life’s challenges. People with a fixed mindset tend to look for other people’s approval. They also tend to be less resilient and throw in the towel
                            more often when things get tough.&nbsp;</p><button class="btn btn-primary btn-lg text-uppercase border rounded-0" type="button" style="background-color: rgb(237,158,136);border: none !important;box-shadow: none !important;letter-spacing: 2px;padding: 10px 20px;">Learn more</button></div>
                </div>
            </div>
        </div>
    </section>

```

## Footer
```html
<div class="footer-basic">
        <footer>
            <ul class="list-inline">
                <li class="list-inline-item"><a class="text-uppercase" href="#" style="letter-spacing: 2px;font-weight: 600;">Home</a></li>
                <li class="list-inline-item"><a class="text-uppercase" href="#" style="letter-spacing: 2px;font-weight: 600;">Services</a></li>
                <li class="list-inline-item"><a class="text-uppercase" href="#" style="letter-spacing: 2px;font-weight: 600;">About</a></li>
                <li class="list-inline-item"><a class="text-uppercase" href="#" style="letter-spacing: 2px;font-weight: 600;">Shop</a></li>
                <li class="list-inline-item"><a class="text-uppercase" href="#" style="letter-spacing: 2px;font-weight: 600;">Blog</a></li>
                <li class="list-inline-item"><a class="text-uppercase" href="#" style="letter-spacing: 2px;font-weight: 600;">Contact</a></li>
            </ul>
            <p class="text-uppercase copyright" style="letter-spacing: 6px;font-weight: 600;">Stevany © 2020</p>
        </footer>
    </div>

```

## Additional script

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/lightbox2/2.8.2/js/lightbox.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/3.3.1/js/swiper.jquery.min.js"></script>
    <script src="assets/js/script.min.js"></script>

```