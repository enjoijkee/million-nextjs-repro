type ValueType = string | number;

const utils = {
  m: (value: ValueType) => ({
    margin: value,
  }),
  mt: (value: ValueType) => ({
    marginTop: value,
  }),
  mr: (value: ValueType) => ({
    marginRight: value,
  }),
  mb: (value: ValueType) => ({
    marginBottom: value,
  }),
  ml: (value: ValueType) => ({
    marginLeft: value,
  }),

  p: (value: ValueType) => ({
    padding: value,
  }),
  pt: (value: ValueType) => ({
    paddingTop: value,
  }),
  pr: (value: ValueType) => ({
    paddingRight: value,
  }),
  pb: (value: ValueType) => ({
    paddingBottom: value,
  }),
  pl: (value: ValueType) => ({
    paddingLeft: value,
  }),

  size: (value: ValueType) => ({
    width: value,
    height: value,
  }),

  br: (value: ValueType) => ({
    borderRadius: value,
  }),

  bgc: (value: string) => ({
    backgroundColor: value,
  }),

  fz: (value: ValueType) => ({
    fontSize: value,
  }),

  fw: (value: ValueType) => ({
    fontWeight: value,
  }),

  elevation: (value: ValueType) => ({
    boxShadow: '$' + value,
  }),

  // animation
  animate: (value: 'fade' | 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight') => ({
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    animationName: value,
    willChange: 'transform, opacity',
  }),
};

export default utils;
