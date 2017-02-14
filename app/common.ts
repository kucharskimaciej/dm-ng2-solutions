export type CustomElement = string | { tagName: string, children: CustomElement[] };

export function el(tagName: string, ...children: CustomElement[]): CustomElement {
    return { tagName, children };
}

export function createElement(node: CustomElement): HTMLElement | Text {
    if (typeof node === 'string') {
        return document.createTextNode(node);
    }

    const el = document.createElement(node.tagName);
    node.children
        .filter(Boolean)
        .map(createElement)
        .forEach(child => el.appendChild(child));

    return el;
}