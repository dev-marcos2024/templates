import { useEffect, useState } from "react";
import { BarraTempo, Content, Title, AlertBox } from "./style";
import { MdDoneAll, MdInfoOutline } from "react-icons/md";
import { useAlert } from "../../hooks/alert";

type AlertProps = {
  autoHideDuration?: number;
};

export const Alert = ({ autoHideDuration = 4000 }: AlertProps) => {
  const [whidt, setWhidt] = useState(100);
  const { show, menssage, type, closeAlert } = useAlert();

  useEffect(() => {
    if (!show && !autoHideDuration) return;
    setWhidt(100);

    const timer = setTimeout(() => {
      closeAlert();
    }, autoHideDuration);

    const step = 100 / (autoHideDuration / 100); // diminui a cada 100ms
    const interval = setInterval(() => {
      setWhidt((prev) => {
        const newWidth = prev - step;
        return newWidth >= 0 ? newWidth : 0;
      });
    }, 100);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [show, autoHideDuration, closeAlert]);

  return (
    <AlertBox show={show} type={type}>
      <Content>
        {type === "error" ? (
          <MdInfoOutline className="icon" />
        ) : (
          <MdDoneAll className="icon" />
        )}
        <Title>{menssage}</Title>
      </Content>
      <BarraTempo w={whidt} />
    </AlertBox>
  );
};
