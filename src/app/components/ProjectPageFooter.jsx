'use client';
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import ViewGithubButton from "./ViewGithubButton";
import HelpIcon from "@mui/icons-material/Help";

const HtmlTooltip = styled(({ className, ...props }) => (
	<Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		backgroundColor: "#000000",
		color: "rgba(255, 255, 255, 0.87)",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(12),
		border: "1px solid #dadde9"
	}
}));

export default function ProjectPageFooter() {
  return (
		<div className="flex flex-col items-center justify-center w-screen h-40 mb-60">
			<ViewGithubButton />
			<div className='flex items-center justify-center'>
				<HtmlTooltip
					title={
						<React.Fragment>
							<Typography color="" sx={{ textAlign: 'center' }}>What's GitHub?</Typography>
							<p className="text-center">
								GitHub is a platform where developers publicly keep their code
								and a place to collaborate on team projects.
							</p>
						</React.Fragment>
					}
					color='primary'>
					<Button><HelpIcon className='bg-slate-800 rounded-full mt-5' /></Button>
				</HtmlTooltip>
			</div>
		</div>
	);
}
