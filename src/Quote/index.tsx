import { useGetQuote } from './hooks';
import { Chip, Spinner } from '../components';
import { Container, Content, Flex, Author, Button, QuoteText } from './styles';
import random from '../assets/random.svg';
import link from '../assets/link.svg';

const Quote = () => {
  const {
    data: quote,
    isLoading: isQuoteLoading,
    isFetching,
    refetch,
  } = useGetQuote();
  const isLoading = isQuoteLoading || isFetching;

  const handleCopyQuote = (): void => {
    navigator.clipboard.writeText(`"${quote?.content}". ${quote?.author}`);
  };

  return (
    <Container>
      {isLoading ? (
        <Spinner color="#4A5567" />
      ) : (
        <>
          <Content>
            <Flex $direction="column" $gap="8" $align="center">
              <Author>{quote?.author}</Author>
              <Flex $gap="4">
                {quote?.tags.map((tag: string) => <Chip key={tag}>{tag}</Chip>)}
              </Flex>
            </Flex>
            <QuoteText>{quote?.content}</QuoteText>
          </Content>
          <Flex $gap="8">
            <Button type="button" onClick={() => refetch()}>
              <img src={random} alt="random" />
            </Button>
            <Button type="button" onClick={handleCopyQuote}>
              <img src={link} alt="link" />
            </Button>
          </Flex>
        </>
      )}
    </Container>
  );
};

export default Quote;
