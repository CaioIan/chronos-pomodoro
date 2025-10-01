import { Link } from "react-router-dom";

type RouterLinkProps = React.ComponentProps<typeof Link>;

export function RouterLink({ ...props }: RouterLinkProps) {
  return <Link {...props}></Link>;
}