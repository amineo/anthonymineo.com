import React, { Component } from 'react';

import { useAmp } from 'next/amp';
import Head from 'next/head';


class Image extends Component {

  
    state = {
      src: this.props.src
    };
  

  
    render() {
      const {
        caption,
        width,
        height,
        isAmp,
        video = false,
        videoSrc,
        captionSpacing = null,
        renderImage,
        oversize = true,
        float,
        shadow,
        style,
        ...rest
      } = this.props;
  
  
      return (
          <>
                {isAmp ? (
                  videoSrc || video ? (
                    <>
                      <Head>
                        <script
                          key="amp-video"
                          async
                          custom-element="amp-video"
                          src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
                        />
                      </Head>
                      <amp-video
                        layout="responsive"
                        src={rest.videoSrc || rest.src}
                        width={width}
                        height={height}
                        muted="muted"
                        autoPlay="autoplay"
                        loop="loop"
                      />
                    </>
                  ) : (
                    <amp-img
                      layout="responsive"
                      src={rest.src}
                      width={width}
                      height={height}
                      alt={rest.alt}
                    />
                  )
                ) : this.state.src ? (
                  videoSrc || video ? (
                    <video src={this.state.src} muted autoPlay loop playsInline />
                  ) : renderImage ? (
                    renderImage(rest)
                  ) : (
                    <img src={this.state.src || null} alt={rest.alt} />
                  )
                ) : null}
      
  
              {caption && (
                <figcaption>
                  {caption}
                </figcaption>
              )}
 
          </>
      );
    }
  }
  
  export const Video = props => {
    const isAmp = useAmp();
    return <Image {...props} video isAmp={isAmp} />;
  };
  
  const ImageComponent = props => {
    const isAmp = useAmp();
    return <Image {...props} isAmp={isAmp} />;
  };
  
  export default ImageComponent;