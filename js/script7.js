let splide = new Splide( '#main-carousel', {
    pagination: false,
  } );
  
  splide.mount();

  // Collects LI elements:
let thumbnails = document.getElementsByClassName( 'thumbnail' );

for ( let i = 0; i < thumbnails.length; i++ ) {
  initThumbnail( thumbnails[ i ], i );
}

function initThumbnail( thumbnail, index ) {
    thumbnail.addEventListener( 'click', function () {
      splide.go( index );
    } );
  }