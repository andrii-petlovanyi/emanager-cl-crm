/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { chakra, shouldForwardProp } from '@chakra-ui/react';

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition';
  },
});

const SectionAnim = ({ children, justify, delay = 0, flex = 1, ...props }) => (
  <StyledDiv
    flex={flex}
    display={justify ? 'flex' : ''}
    justifyContent={justify ? justify : ''}
    width="100%"
    initial={{ y: 3, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, delay }}
    {...props}
  >
    {children}
  </StyledDiv>
);

export default SectionAnim;
