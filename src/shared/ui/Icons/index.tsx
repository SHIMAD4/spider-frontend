export const Icons = {
    Arrow: ({ size = 24, color = 'currentColor', ...props }) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            id='Outline'
            viewBox='0 0 24 24'
            width={size}
            height={size + 10}
            stroke={color}
            {...props}
        >
            <path d='M7,24a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l8.17-8.17a3,3,0,0,0,0-4.24L6.29,1.71A1,1,0,0,1,7.71.29l8.17,8.17a5,5,0,0,1,0,7.08L7.71,23.71A1,1,0,0,1,7,24Z' />
        </svg>
    ),
    Add: ({ size = 24, ...props }) => (
        <svg
            id='Layer_1'
            viewBox='0 0 24 24'
            width={size + 10}
            height={size + 10}
            xmlns='http://www.w3.org/2000/svg'
            data-name='Layer 1'
            {...props}
        >
            <path d='m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z' />
        </svg>
    ),
    Cross: ({ size = 24, ...props }) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            id='Outline'
            viewBox='0 0 24 24'
            width={size}
            height={size}
            {...props}
        >
            <path d='M23.707.293h0a1,1,0,0,0-1.414,0L12,10.586,1.707.293a1,1,0,0,0-1.414,0h0a1,1,0,0,0,0,1.414L10.586,12,.293,22.293a1,1,0,0,0,0,1.414h0a1,1,0,0,0,1.414,0L12,13.414,22.293,23.707a1,1,0,0,0,1.414,0h0a1,1,0,0,0,0-1.414L13.414,12,23.707,1.707A1,1,0,0,0,23.707.293Z' />
        </svg>
    ),
}
