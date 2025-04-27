import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <div style={{ transform: 'rotate(0deg)' }}>
      <svg
        aria-hidden
        className={classes(styles.monogram, className)}
        width="46"
        height="29"
        viewBox="0 0 46 29"
        ref={ref}
        {...props}
      >
        <defs>
          <clipPath id={clipId}>
            <path d="M16 25.093c-8.839 0-16-4.796-16-10.719 0-5.916 7.161-10.713 16-10.713s16 4.797 16 10.713c0 5.923-7.161 10.719-16 10.719zM18.448 7.849c-6.713 0-12.161 3.281-12.161 7.328s5.448 7.328 12.161 7.328c6.713 0 11.677-2.245 11.677-7.328 0-5.084-4.959-7.328-11.677-7.328zM24.364 20.26c0.527 0.156 1.037 0.349 1.537 0.579 0.287 0.14 0.547 0.328 0.776 0.552 0.14 0.151 0.26 0.323 0.353 0.511l3.819 6.437h-6.172l-2.885-5.417c-0.265-0.473-0.584-0.911-0.953-1.307-0.188-0.208-0.453-0.333-0.735-0.333h-1.464v7.052l-5.457 0.005v-18.021h10.963c0 0 4.991 0.089 4.991 4.839 0.009 2.693-2.079 4.932-4.772 5.104zM21.995 14.224h-3.307v3.063h3.307c0.86 0.011 1.557-0.699 1.532-1.557 0.047-0.865-0.672-1.568-1.532-1.505z" />{' '}
            {/* <path d="M16 32C7.163 32 0 24.837 0 16S7.163 0 16 0s16 7.163 16 16-7.163 16-16 16zm-5.5-7.362l3.467-1.812V10.745l4.952 2.778-3.714 1.933v3.987L23.5 25v-3.745l-5.076-3.503 4.21-2.175v-3.866L13.966 7 10.5 8.812z" /> */}
            {/* <path d="M16.525 28.462l7.18-18.35.003-.001 9.72 18.442a.838.838 0 001.524-.093l3.39-8.824a.846.846 0 00-.04-.686L30.307 3.605A6.698 6.698 0 0024.367 0h-4.6a.84.84 0 00-.74 1.23l3.63 6.887-3.655 9.15-7.12-13.662A6.698 6.698 0 005.942 0h-4.6a.842.842 0 00-.748 1.23L15 28.554a.839.839 0 001.524-.092zM42.392 8.806a.835.835 0 00.387-.446v.001l2.67-7.23a.838.838 0 00-.785-1.129h-6.578a.837.837 0 00-.736 1.238l3.907 7.226c.22.41.729.56 1.135.34z" /> */}
          </clipPath>
        </defs>
        <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
        {highlight && (
          <g clipPath={`url(#${clipId})`}>
            <rect className={styles.highlight} width="100%" height="100%" />
          </g>
        )}
      </svg>

      {/* <svg
        viewBox="0 0 36 36"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        role="img"
        class="iconify iconify--twemoji"
        preserveAspectRatio="xMidYMid meet"
        fill="#ffffff"
        stroke="#ffffff"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        
      </svg> */}
    </div>
  );
});
