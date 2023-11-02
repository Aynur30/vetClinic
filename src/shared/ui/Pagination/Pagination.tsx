import { useState, useEffect, FC } from 'react';
import styles from './Pagination.module.scss';

interface Props {
    totalPages: number;
    currentPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: FC<Props> = ({ totalPages, currentPage, onPageChange }) => {
    const [visiblePages, setVisiblePages] = useState<number[]>([]);
    useEffect(() => {
        const allPages = Array.from({ length: totalPages }, (_, index) => index + 1);

        if (currentPage <= 3) {
            setVisiblePages(allPages.slice(0, 5));
        } else if (currentPage > totalPages - 3) {
            setVisiblePages(allPages.slice(totalPages - 5));
        } else {
            setVisiblePages(allPages.slice(currentPage - 3, currentPage + 2));
        }
    }, [totalPages, currentPage]);

    const handlePageChange = (page: number) => {
        if (page !== currentPage) {
            onPageChange(page);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            onPageChange(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
        }
    };

    return (
        <div data-testid="pagination" className={styles.pagination}>
            <button className={styles.pageButton} onClick={handlePrevPage}>
                &lt;
            </button>
            {currentPage > 3 && (
                <button className={styles.pageButton} onClick={() => handlePageChange(1)}>
                    1
                </button>
            )}
            {currentPage > 4 && <span className={styles.moreDots}>...</span>}
            {visiblePages.map((page) => (
                <button
                    key={page}
                    className={`${styles.pageButton} ${page === currentPage ? styles.active : ''}`}
                    onClick={() => handlePageChange(page)}
                >
                    {page}
                </button>
            ))}
            {currentPage < totalPages - 3 && <span className={styles.moreDots}>...</span>}
            {currentPage < totalPages - 2 && (
                <button className={styles.pageButton} onClick={() => handlePageChange(totalPages)}>
                    {totalPages}
                </button>
            )}
            <button className={styles.pageButton} onClick={handleNextPage}>
                &gt;
            </button>
        </div>
    );
};

export default Pagination;