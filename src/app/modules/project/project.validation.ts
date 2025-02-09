import { z } from 'zod';

const createProjectValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Project Title is Required' }),
    description: z.string({
      required_error: 'Project Description is Required',
    }),
    projectFeatures: z.string({
      required_error: 'Project Features is Required',
    }),
    technologies: z.string({
      required_error: 'Project Technologies is Required',
    }),
    fronEndGithub: z.string().optional(),
    backendEndGithub: z.string().optional(),
    projectLiveLink: z.string({
      required_error: 'Project Live Link is Required',
    }),

    image: z.string({ required_error: 'Blog image is Required' }),
  }),
});

const updateProjectValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'Project Title is Required' }).optional(),
    description: z
      .string({
        required_error: 'Project Description is Required',
      })
      .optional(),
    projectFeatures: z
      .string({
        required_error: 'Project Features is Required',
      })
      .optional(),
    technologies: z
      .string({
        required_error: 'Project Technologies is Required',
      })
      .optional(),
    fronEndGithub: z.string().optional(),
    backendEndGithub: z.string().optional(),
    projectLiveLink: z
      .string({
        required_error: 'Project Live Link is Required',
      })
      .optional(),

    image: z.string({ required_error: 'Blog image is Required' }).optional(),
  }),
});

export const ProjectValidationSchemas = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
