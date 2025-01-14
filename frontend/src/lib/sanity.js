import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-03-01',
  useCdn: false
})



// skerQkUH8kvuSkwRMtGuyfMrCqgdrV2nsCW02iCKhfwVbplGuq0F22qVjOSpwIDXaxupLS9ghsBGhdDsocKcxNpVVNG0DuMrOKjMW0IgXJPvUERnDO0eZFZwu2RZKGAvnS06LudR23RanCPCooTIy1vPexYjFv1rlHAHQURxjhsWMTC8OI8K