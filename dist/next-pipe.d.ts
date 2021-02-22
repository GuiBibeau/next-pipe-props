declare type PipedGetServerSideProps = (arg?: any) => Promise<any> | any;
export declare const pipeProps: (...functions: PipedGetServerSideProps[]) => (input: any) => Promise<{
    props: Record<string, unknown>;
}>;
export {};
