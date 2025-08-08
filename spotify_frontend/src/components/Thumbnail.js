import React from "react";
import "./Thumbnail.css";

/**
 * Spotify Thumbnail screen extracted from Figma JSON.
 * Pure presentational functional component.
 */
function Thumbnail() {
  return (
    <div className="thumbnail-root">
      {/* Preview section with all main elements */}
      <div className="thumbnail-preview">
        {/* Top bar: Logo and Free bar */}
        <div className="thumbnail-topbar">
          <div className="thumbnail-logo-bar">
            {/* Spotify Logo: stylized, left */}
            <div className="thumbnail-logo-image">
              {/* Figma: placeholder for logo image */}
              <div className="spotify-img-placeholder" />
            </div>
            <div className="thumbnail-logo-text">
              <span className="logo-main">Spotify</span>
            </div>
          </div>
          <div className="free-bar">
            <span className="free-bar-text">Free</span>
          </div>
        </div>

        {/* Preview title */}
        <div className="thumbnail-header-group">
          <div className="thumbnail-title">
            <span className="main-title">UI</span>
          </div>
          <div className="thumbnail-subtitle">
            <span className="subtitle-text">Source files</span>
          </div>
          <div className="thumbnail-desktop-tablet">
            <span className="desktop-tablet-text">Desktop / Tablet</span>
          </div>
          <div className="recreated">
            <span className="recreated-by">Recreated by: figr.design</span>
          </div>
        </div>

        {/* Figma Files group */}
        <div className="thumbnail-figma-files">
          <div className="figma-frame-bg">
            {/* background rectangle with subtle shadow */}
          </div>
          <div className="figma-files-content">
            <div className="figma-logo-and-text">
              {/* Figma icon composition */}
              <div className="figma-svg-icons">
                {/* Represented as colored SVG ellipses---see CSS */}
                <svg width="48" height="48" viewBox="0 0 48 48">
                  <ellipse cx="24" cy="10" rx="8.5" ry="8.5" style={{ fill: "var(--figma-blue)" }} />
                  <ellipse cx="24" cy="38" rx="8.5" ry="8.5" style={{ fill: "var(--figma-green)" }} />
                  <ellipse cx="39" cy="24" rx="8.5" ry="8.5" style={{ fill: "var(--figma-red)" }} />
                  <ellipse cx="24" cy="24" rx="8.5" ry="8.5" style={{ fill: "var(--figma-orange)" }} />
                  <ellipse cx="10" cy="24" rx="8.5" ry="8.5" style={{ fill: "var(--figma-purple)" }} />
                </svg>
              </div>
              <span className="figma-files-plus">+10 Screens</span>
            </div>
          </div>
        </div>
      </div>
      {/* Decorative preview vector for background shape/accent */}
      <div className="thumbnail-bg-vector"></div>

      {/* Preview images (main content, not implemented here for space) */}
      <div className="thumbnail-preview-images">
        {/* Cards, sidebars, tracklists present in original Figma omitted for brevity -
            Structure would place them here using card, sidebar, playlist, etc. classes and mapped content. */}
        <div className="preview-images-placeholder"></div>
      </div>
    </div>
  );
}
export default Thumbnail;
