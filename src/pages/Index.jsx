import { Box, Container, Heading, Text, VStack, Image, Button, SimpleGrid, Link } from "@chakra-ui/react";
import { FaRocket, FaSpaceShuttle, FaSatellite } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} as="section" textAlign="center" mt={10} mb={20}>
        <Heading size="2xl">宇宙のシミュレーション</Heading>
        <Text fontSize="xl">宇宙の無限の可能性を体験し、新しい発見をしましょう。惑星、星、銀河系をシミュレートし、 宇宙の美しさと複雑さを探求します。</Text>
        <Image src="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzZXxlbnwwfHx8fDE3MDkwNzI3NDN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="宇宙" borderRadius="lg" boxSize="300px" objectFit="cover" boxShadow="lg" />
      </VStack>

      <SimpleGrid columns={[1, 2, 3]} spacing={10}>
        <Box textAlign="center">
          <FaRocket size="3em" />
          <Heading size="md" mt={4}>
            ロケット打ち上げ
          </Heading>
          <Text mt={2}>ロケットを打ち上げ、宇宙の旅を開始しましょう。物理法則に基づいたシミュレーションを提供します。</Text>
          <Button mt={4} leftIcon={<FaRocket />} colorScheme="purple">
            シミュレート開始
          </Button>
        </Box>
        <Box textAlign="center">
          <FaSpaceShuttle size="3em" />
          <Heading size="md" mt={4}>
            スペースシャトル
          </Heading>
          <Text mt={2}>スペースシャトルを操縦し、国際宇宙ステーションへのドッキングを試みましょう。</Text>
          <Button mt={4} leftIcon={<FaSpaceShuttle />} colorScheme="teal">
            ミッション開始
          </Button>
        </Box>
        <Box textAlign="center">
          <FaSatellite size="3em" />
          <Heading size="md" mt={4}>
            人工衛星
          </Heading>
          <Text mt={2}>人工衛星の軌道と通信システムをシミュレートし、地球周回軌道の理解を深めます。</Text>
          <Button mt={4} leftIcon={<FaSatellite />} colorScheme="orange">
            軌道計算
          </Button>
        </Box>
      </SimpleGrid>

      <Box as="footer" textAlign="center" py={10} mt={20}>
        <Text>© 2023 宇宙のシミュレーションサイト. All rights reserved.</Text>
        <Link href="#" color="teal.500" fontWeight="bold">
          利用規約
        </Link>
        <span> | </span>
        <Link href="#" color="teal.500" fontWeight="bold">
          プライバシーポリシー
        </Link>
      </Box>
    </Container>
  );
};

export default Index;
