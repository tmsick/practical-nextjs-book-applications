import Link from "next/link"
import { HeadGroup } from "sns-shared-ui/src/components/HeadGroup"
import { Heading } from "sns-shared-ui/src/components/Heading"
import { LinkButton } from "sns-shared-ui/src/components/LinkButton"
import { PhotoCard } from "sns-shared-ui/src/components/PhotoCard"
import { Section } from "sns-shared-ui/src/components/Section"
import { getCategories } from "@/services/getCategories"
import styles from "./style.module.css"

export async function TopCategories() {
  // 【2】カテゴリー一覧に使用するデータ
  const data = await getCategories()
  return (
    <Section>
      <HeadGroup>
        <Heading level={2} size="small">
          Categories
        </Heading>
        <LinkButton href="/categories" size="small" color="white">
          カテゴリー一覧
        </LinkButton>
      </HeadGroup>
      <div className={styles.cardContainer}>
        {data.categories.map(category => (
          <Link href={`/categories/${category.name}`} key={category.id}>
            <PhotoCard
              imageUrl={category.imageUrl}
              title={category.label}
              size="small"
              ratio="square"
              rounded={false}
            />
          </Link>
        ))}
      </div>
    </Section>
  )
}
