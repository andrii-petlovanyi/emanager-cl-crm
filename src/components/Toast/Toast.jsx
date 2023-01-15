import { useToast } from '@chakra-ui/react';

const Toast = () => {
  const toast = useToast();
  // types: "success", "info", "warning", "error"

  const addToast = res => {
    toast({
      description: res.message,
      status: res.type,
      duration: 5000,
      position: 'bottom',
      isClosable: true,
    });
  };

  return { addToast };
};

export default Toast;
