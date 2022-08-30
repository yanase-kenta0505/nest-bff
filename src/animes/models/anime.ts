import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Anime {
  @Field(type => ID)
  id: string;

  @Field()
  title: string

  @Field()
  description: string
}
