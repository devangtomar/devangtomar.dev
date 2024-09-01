// pages/[slug].js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import markdownToHtml from '../lib/markdownToHtml';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const postDirectory = path.join(process.cwd(), 'data/posts');

export async function getStaticPaths() {
    const filenames = fs.readdirSync(postDirectory);
    const paths = filenames.map(filename => ({
        params: {
            slug: filename.replace(/\.md$/, '')
        }
    }));

    return {
        paths,
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const filePath = path.join(postDirectory, `${params.slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { content, data } = matter(fileContent);
    const contentHtml = await markdownToHtml(content);

    return {
        props: {
            contentHtml,
            frontMatter: data
        }
    };
}

export default function Post({ contentHtml, frontMatter }) {
    return (
        <>
            <Header />
            <article>
                <h1>{frontMatter.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
            </article>
            <Footer />
        </>
    );
}