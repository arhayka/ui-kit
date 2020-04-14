import * as React from 'react';

function M(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M7.62 0l8.94 8.94c.59.59.59 1.54 0 2.12l-5.5 5.5c-.29.29-.68.44-1.06.44s-.77-.15-1.06-.44l-5.5-5.5a1.49 1.49 0 010-2.12l5.15-5.15-2.38-2.38L7.62 0zM10 5.21L5.21 10h9.58L10 5.21z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path d="M17 15c0-1.33 2-3.5 2-3.5s2 2.17 2 3.5c0 1.1-.9 2-2 2s-2-.9-2-2zM24 20H0v4h24v-4z" />
    </svg>
  );
}

export default M;