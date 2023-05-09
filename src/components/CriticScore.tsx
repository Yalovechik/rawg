import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  return (
    <div>
      <Badge>{score}</Badge>
    </div>
  );
};

export default CriticScore;
