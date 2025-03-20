import Card from "../Card/Card/index.tsx";
import CardHeader from "../Card/CardHeader/index.tsx";
import CardBody from "../Card/CardBody/index.tsx";
import CardActions from "../Card/CardActions/index.tsx";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

type ProjectDetailsCardProps = {
  title: string;
  subtitle: string;
  details: string;
  setDetails: (details: string) => void;
  onAddDetails: () => void;
  onViewDetails: () => void;
  hasAddEditPermission: boolean;
  hasViewPermission: boolean;
  shadow?: "sm" | "md" | "lg";
};

const ProjectDetailsCard = (props: ProjectDetailsCardProps) => {
  const {
    title,
    subtitle,
    details,
    setDetails,
    onAddDetails,
    onViewDetails,
    hasAddEditPermission,
    hasViewPermission,
    shadow = "lg",
  } = props;

  return (
    <Card
      className="w-full md:w-[400px] lg:w-[440px] max-w-md border border-purple-300 bg-white rounded-lg shadow-lg"
      shadow={shadow}
    >
      <CardHeader title={title} subtitle={subtitle} />
      <CardBody className=" border border-[#E7D8FE] rounded shadow-inner p-0">
        <ReactQuill
          className="w-full border-none "
          theme="snow"
          value={details}
          onChange={setDetails}
          placeholder="Enter details here..."
        />
      </CardBody>
      <CardActions
        onAddDetails={onAddDetails}
        onViewDetails={onViewDetails}
        hasAddEditPermission={hasAddEditPermission}
        hasViewPermission={hasViewPermission}
      />
    </Card>
  );
};

export default ProjectDetailsCard;
